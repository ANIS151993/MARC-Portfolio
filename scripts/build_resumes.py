#!/usr/bin/env python3
from __future__ import annotations

import os
import re
import shutil
import subprocess
import sys
import tempfile
import zipfile
from pathlib import Path
from xml.sax.saxutils import escape

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))

from resume_src.resume_data import (
    JOB_RESUME,
    JOB_RESUME_CLOUD_SECURITY,
    JOB_RESUME_NETWORK_SECURITY,
    JOB_RESUME_SYSTEMS_ADMINISTRATOR,
    PHD_RESUME,
    SHARED,
)

PDF_CSS = """
@page {
  size: A4;
  margin: 0.62in;
}
body {
  font-family: Arial, Helvetica, sans-serif;
  color: #1f2430;
  font-size: 10.6pt;
  line-height: 1.35;
  margin: 0;
}
.resume {
  width: 100%;
}
.resume p,
.resume li {
  text-align: justify;
}
header {
  border-bottom: 2px solid #c95d14;
  padding-bottom: 10px;
  margin-bottom: 16px;
}
h1 {
  font-size: 20pt;
  margin: 0 0 3px;
  letter-spacing: 0.2px;
}
.title {
  font-size: 11.5pt;
  font-weight: 700;
  color: #7a3310;
  margin: 0 0 6px;
}
.subtitle {
  font-size: 10.4pt;
  margin: 0 0 8px;
  text-align: center;
}
.contact, .links {
  font-size: 9.6pt;
  margin: 2px 0;
  text-align: center;
}
.section {
  margin: 0 0 14px;
}
.section-title {
  font-size: 11pt;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  color: #0f3e56;
  border-bottom: 1px solid #d7dce3;
  padding-bottom: 4px;
  margin: 0 0 8px;
}
p, ul {
  margin: 0 0 7px;
}
ul {
  padding-left: 16px;
}
li {
  margin: 0 0 4px;
}
.keywords {
  margin-top: 2px;
}
.keyword-paragraph {
  margin: 0;
  text-align: justify;
}
.entry {
  margin: 0 0 10px;
  page-break-inside: avoid;
}
.entry-head {
  display: block;
  margin-bottom: 4px;
}
.entry-title {
  font-weight: 700;
}
.entry-meta {
  color: #526074;
  font-size: 9.7pt;
  text-align: left;
}
.compact-list li {
  margin-bottom: 3px;
}
.footer-note {
  color: #526074;
  font-size: 9.2pt;
}
.resume-job {
  font-size: 10pt;
  line-height: 1.28;
}
.resume-job .section {
  margin-bottom: 11px;
}
.resume-job p,
.resume-job ul {
  margin-bottom: 5px;
}
.resume-job .entry {
  margin-bottom: 8px;
}
"""


def join_contact() -> str:
    return f"{SHARED['location']} | {SHARED['phone']} | {' | '.join(SHARED['emails'])}"


def join_links(link_names: list[str]) -> str:
    return " | ".join(f"{label}: {SHARED['links'][label]}" for label in link_names)


def ul(items: list[str], klass: str = "") -> str:
    cls = f' class="{klass}"' if klass else ""
    return f"<ul{cls}>" + "".join(f"<li>{escape(item)}</li>" for item in items) + "</ul>"


def render_experience(entries: list[dict[str, object]]) -> str:
    blocks = []
    for entry in entries:
        head = (
            f"<div class=\"entry-head\"><div class=\"entry-title\">{escape(entry['role'])}</div>"
            f"<div class=\"entry-meta\">{escape(entry['org'])}, {escape(entry['location'])} | {escape(entry['dates'])}</div></div>"
        )
        blocks.append(f"<article class=\"entry\">{head}{ul(entry['bullets'])}</article>")
    return "".join(blocks)


def render_projects(entries: list[dict[str, str]]) -> str:
    items = [f"<li><strong>{escape(item['name'])}.</strong> {escape(item['detail'])}</li>" for item in entries]
    return '<ul class="compact-list">' + ''.join(items) + '</ul>'


def render_key_value_map(data: dict[str, str]) -> str:
    items = [f"<li><strong>{escape(k)}:</strong> {escape(v)}</li>" for k, v in data.items()]
    return '<ul class="compact-list">' + ''.join(items) + '</ul>'


def render_terms_paragraph(items: list[str]) -> str:
    if not items:
        return ""
    if len(items) == 1:
        return escape(items[0]) + "."
    return escape("; ".join(items[:-1]) + "; and " + items[-1] + ".")


def render_job_html(d: dict[str, object], html_title: str) -> str:
    return f"""<!doctype html>
<html lang=\"en\">
<head>
  <meta charset=\"utf-8\">
  <title>{escape(html_title)} | Md Anisur Rahman Chowdhury</title>
  <style>{PDF_CSS}</style>
</head>
<body>
  <main class=\"resume resume-job\">
    <header>
      <h1>{escape(SHARED['name'])}</h1>
      <p class=\"title\">{escape(d['title'])}</p>
      <p class=\"subtitle\">{escape(d['subtitle'])}</p>
      <p class=\"contact\">{escape(join_contact())}</p>
      <p class=\"links\">{escape(join_links(['LinkedIn', 'GitHub', 'Portfolio', 'Google Scholar']))}</p>
    </header>

    <section class=\"section\">
      <h2 class=\"section-title\">Professional Summary</h2>
      {''.join(f'<p>{escape(item)}</p>' for item in d['summary'])}
    </section>

    <section class=\"section\">
      <h2 class=\"section-title\">Core Expertise</h2>
      <p class=\"keyword-paragraph\">{render_terms_paragraph(d['expertise'])}</p>
    </section>

    <section class=\"section\">
      <h2 class=\"section-title\">Professional Experience</h2>
      {render_experience(d['experience'])}
    </section>

    <section class=\"section\">
      <h2 class=\"section-title\">Selected Technical Contributions</h2>
      {ul(d['contributions'], 'compact-list')}
    </section>

    <section class=\"section\">
      <h2 class=\"section-title\">Selected Projects</h2>
      {render_projects(d['projects'])}
    </section>

    <section class=\"section\">
      <h2 class=\"section-title\">Education</h2>
      {ul(d['education'], 'compact-list')}
    </section>

    <section class=\"section\">
      <h2 class=\"section-title\">Technical Tools</h2>
      {render_key_value_map(d['technical_tools'])}
    </section>
  </main>
</body>
</html>
"""


def render_phd_html() -> str:
    d = PHD_RESUME
    edu_html = "".join(
        f"<article class=\"entry\"><div class=\"entry-head\"><div class=\"entry-title\">{escape(item['degree'])}</div>"
        f"<div class=\"entry-meta\">{escape(item['institution'])} | {escape(item['dates'])}</div></div><p>{escape(item['detail'])}</p></article>"
        for item in d['education']
    )
    return f"""<!doctype html>
<html lang=\"en\">
<head>
  <meta charset=\"utf-8\">
  <title>PhD Resume | Md Anisur Rahman Chowdhury</title>
  <style>{PDF_CSS}</style>
</head>
<body>
  <main class=\"resume resume-phd\">
    <header>
      <h1>{escape(SHARED['name'])}</h1>
      <p class=\"title\">{escape(d['title'])}</p>
      <p class=\"subtitle\">{escape(d['subtitle'])}</p>
      <p class=\"contact\">{escape(join_contact())}</p>
      <p class=\"links\">{escape(join_links(['LinkedIn', 'GitHub', 'Google Scholar', 'ResearchGate', 'Portfolio']))}</p>
    </header>

    <section class=\"section\">
      <h2 class=\"section-title\">Research Profile</h2>
      {''.join(f'<p>{escape(item)}</p>' for item in d['profile'])}
    </section>

    <section class=\"section\">
      <h2 class=\"section-title\">Research Interests</h2>
      <p class=\"keyword-paragraph\">{render_terms_paragraph(d['research_interests'])}</p>
    </section>

    <section class=\"section\">
      <h2 class=\"section-title\">Education</h2>
      {edu_html}
    </section>

    <section class=\"section\">
      <h2 class=\"section-title\">Research and Academic Experience</h2>
      {render_experience(d['research_experience'])}
      {ul(d['collaboration'], 'compact-list')}
    </section>

    <section class=\"section\">
      <h2 class=\"section-title\">Research Systems and Reproducible Projects</h2>
      {render_projects(d['research_systems'])}
    </section>

    <section class=\"section\">
      <h2 class=\"section-title\">Published First-Author Papers</h2>
      {ul(d['published_first_author'], 'compact-list')}
    </section>

    <section class=\"section\">
      <h2 class=\"section-title\">Published Co-Authored Papers</h2>
      {ul(d['published_coauthored'], 'compact-list')}
    </section>

    <section class=\"section\">
      <h2 class=\"section-title\">Under Review</h2>
      {ul(d['under_review'], 'compact-list')}
    </section>

    <section class=\"section\">
      <h2 class=\"section-title\">In Preparation</h2>
      {ul(d['in_preparation'], 'compact-list')}
    </section>

    <section class=\"section\">
      <h2 class=\"section-title\">Technical Tools for Research</h2>
      {render_key_value_map(d['technical_tools'])}
    </section>

    <section class=\"section\">
      <h2 class=\"section-title\">Research Goal</h2>
      <p>{escape(d['research_goal'])}</p>
    </section>
  </main>
</body>
</html>
"""


def para(text: str, *, bold: bool = False, size: int = 22, spacing_before: int = 0, spacing_after: int = 120, align: str = "left") -> str:
    align_xml = f'<w:jc w:val="{align}"/>' if align != "left" else ""
    rpr = []
    if bold:
        rpr.append("<w:b/>")
    rpr.append(f'<w:sz w:val="{size}"/>')
    rpr.append(f'<w:szCs w:val="{size}"/>')
    safe = escape(text)
    return (
        "<w:p>"
        f"<w:pPr><w:spacing w:before=\"{spacing_before}\" w:after=\"{spacing_after}\"/>{align_xml}</w:pPr>"
        f"<w:r><w:rPr>{''.join(rpr)}</w:rPr><w:t xml:space=\"preserve\">{safe}</w:t></w:r>"
        "</w:p>"
    )


def build_docx_body(lines: list[tuple[str, str]]) -> str:
    xml = []
    for kind, text in lines:
        if kind == "name":
            xml.append(para(text, bold=True, size=30, spacing_after=80, align="center"))
        elif kind == "title":
            xml.append(para(text, bold=True, size=22, spacing_after=120, align="center"))
        elif kind == "contact":
            xml.append(para(text, size=18, spacing_after=80, align="center"))
        elif kind == "heading":
            xml.append(para(text.upper(), bold=True, size=20, spacing_before=140, spacing_after=90))
        elif kind == "subheading":
            xml.append(para(text, bold=True, size=18, spacing_before=80, spacing_after=40))
        elif kind == "meta":
            xml.append(para(text, size=16, spacing_after=70, align="both"))
        elif kind == "bullet":
            xml.append(para(f"- {text}", size=18, spacing_after=50, align="both"))
        else:
            xml.append(para(text, size=18, spacing_after=70, align="both"))
    return "".join(xml)


def normalize_sectpr(sectpr: str) -> str:
    pgsz = '<w:pgSz w:w="11906" w:h="16838"/>'
    pgmar = '<w:pgMar w:top="900" w:right="900" w:bottom="900" w:left="900" w:header="360" w:footer="360" w:gutter="0"/>'
    if "<w:pgSz" in sectpr:
        sectpr = re.sub(r"<w:pgSz[^>]*/>", pgsz, sectpr)
    else:
        sectpr = sectpr.replace("</w:sectPr>", pgsz + "</w:sectPr>")
    if "<w:pgMar" in sectpr:
        sectpr = re.sub(r"<w:pgMar[^>]*/>", pgmar, sectpr)
    else:
        sectpr = sectpr.replace("</w:sectPr>", pgmar + "</w:sectPr>")
    return sectpr


def replace_docx_document(template_path: Path, output_path: Path, lines: list[tuple[str, str]]) -> None:
    with zipfile.ZipFile(template_path, "r") as zin:
        original = zin.read("word/document.xml").decode("utf-8")
        prefix = original.split("<w:body>", 1)[0] + "<w:body>"
        sectpr_match = re.search(r"(<w:sectPr[\s\S]*?</w:sectPr>)", original)
        if not sectpr_match:
            raise RuntimeError(f"Could not find sectPr in {template_path}")
        suffix = normalize_sectpr(sectpr_match.group(1)) + "</w:body></w:document>"
        body = build_docx_body(lines)
        new_xml = prefix + body + suffix

        with tempfile.NamedTemporaryFile(delete=False, suffix=".docx") as tmp:
            tmp_path = Path(tmp.name)
        try:
            with zipfile.ZipFile(tmp_path, "w") as zout:
                for item in zin.infolist():
                    if item.filename == "word/document.xml":
                        zout.writestr(item, new_xml)
                    else:
                        zout.writestr(item, zin.read(item.filename))
            shutil.move(tmp_path, output_path)
        finally:
            if tmp_path.exists():
                tmp_path.unlink(missing_ok=True)


def write_text(path: Path, content: str) -> None:
    path.write_text(content, encoding="utf-8")


def render_pdf(html_path: Path, pdf_path: Path) -> None:
    subprocess.run([os.path.expanduser("~/.local/bin/weasyprint"), str(html_path), str(pdf_path)], check=True)


def job_docx_lines(d: dict[str, object]) -> list[tuple[str, str]]:
    lines = [
        ("name", SHARED["name"]),
        ("title", d["title"]),
        ("contact", join_contact()),
        ("contact", join_links(["LinkedIn", "GitHub", "Portfolio", "Google Scholar"])),
        ("heading", "Professional Summary"),
    ]
    lines += [("normal", item) for item in d["summary"]]
    lines += [("heading", "Core Expertise")]
    lines.append(("normal", render_terms_paragraph(d["expertise"])))
    lines += [("heading", "Professional Experience")]
    for entry in d["experience"]:
        lines.append(("subheading", f"{entry['role']} | {entry['org']}"))
        lines.append(("meta", f"{entry['location']} | {entry['dates']}"))
        lines += [("bullet", bullet) for bullet in entry["bullets"]]
    lines += [("heading", "Selected Technical Contributions")]
    lines += [("bullet", item) for item in d["contributions"]]
    lines += [("heading", "Selected Projects")]
    for item in d["projects"]:
        lines.append(("bullet", f"{item['name']}: {item['detail']}"))
    lines += [("heading", "Education")]
    lines += [("bullet", item) for item in d["education"]]
    lines += [("heading", "Technical Tools")]
    for key, value in d["technical_tools"].items():
        lines.append(("bullet", f"{key}: {value}"))
    return lines


def phd_docx_lines() -> list[tuple[str, str]]:
    d = PHD_RESUME
    lines = [
        ("name", SHARED["name"]),
        ("title", d["title"]),
        ("contact", join_contact()),
        ("contact", join_links(["LinkedIn", "GitHub", "Google Scholar", "ResearchGate", "Portfolio"])),
        ("heading", "Research Profile"),
    ]
    lines += [("normal", item) for item in d["profile"]]
    lines += [("heading", "Research Interests")]
    lines.append(("normal", render_terms_paragraph(d["research_interests"])))
    lines += [("heading", "Education")]
    for item in d["education"]:
        lines.append(("subheading", item["degree"]))
        lines.append(("meta", f"{item['institution']} | {item['dates']}"))
        lines.append(("normal", item["detail"]))
    lines += [("heading", "Research and Academic Experience")]
    for entry in d["research_experience"]:
        lines.append(("subheading", f"{entry['role']} | {entry['org']}"))
        lines.append(("meta", f"{entry['location']} | {entry['dates']}"))
        lines += [("bullet", bullet) for bullet in entry["bullets"]]
    lines += [("heading", "Collaboration")]
    lines += [("bullet", item) for item in d["collaboration"]]
    lines += [("heading", "Research Systems and Reproducible Projects")]
    for item in d["research_systems"]:
        lines.append(("bullet", f"{item['name']}: {item['detail']}"))
    lines += [("heading", "Published First-Author Papers")]
    lines += [("bullet", item) for item in d["published_first_author"]]
    lines += [("heading", "Published Co-Authored Papers")]
    lines += [("bullet", item) for item in d["published_coauthored"]]
    lines += [("heading", "Under Review")]
    lines += [("bullet", item) for item in d["under_review"]]
    lines += [("heading", "In Preparation")]
    lines += [("bullet", item) for item in d["in_preparation"]]
    lines += [("heading", "Technical Tools for Research")]
    for key, value in d["technical_tools"].items():
        lines.append(("bullet", f"{key}: {value}"))
    lines += [("heading", "Research Goal")]
    lines.append(("normal", d["research_goal"]))
    return lines


def main() -> None:
    job_html_path = ROOT / "Job-Resume" / "resume-source.html"
    job_targeted_html_path = ROOT / "Job-Resume" / "network-security-resume-source.html"
    job_sysadmin_html_path = ROOT / "Job-Resume" / "systems-administrator-resume-source.html"
    job_cloud_html_path = ROOT / "Job-Resume" / "cloud-security-engineer-resume-source.html"
    phd_html_path = ROOT / "PhD-Resume" / "resume-source.html"
    job_pdf_path = ROOT / "Job-Resume" / "Resume.pdf"
    job_targeted_pdf_path = ROOT / "Job-Resume" / "Resume-Network-Security-Engineer.pdf"
    job_sysadmin_pdf_path = ROOT / "Job-Resume" / "Resume-Systems-Administrator.pdf"
    job_cloud_pdf_path = ROOT / "Job-Resume" / "Resume-Cloud-Security-Engineer.pdf"
    phd_pdf_path = ROOT / "PhD-Resume" / "Resume of MARC.pdf"
    job_docx_path = ROOT / "Job-Resume" / "Resume.docx"
    job_targeted_docx_path = ROOT / "Job-Resume" / "Resume-Network-Security-Engineer.docx"
    job_sysadmin_docx_path = ROOT / "Job-Resume" / "Resume-Systems-Administrator.docx"
    job_cloud_docx_path = ROOT / "Job-Resume" / "Resume-Cloud-Security-Engineer.docx"
    phd_docx_path = ROOT / "PhD-Resume" / "Resume of MARC.docx"

    write_text(job_html_path, render_job_html(JOB_RESUME, "Job Resume"))
    write_text(job_targeted_html_path, render_job_html(JOB_RESUME_NETWORK_SECURITY, "Network Security Engineer Resume"))
    write_text(job_sysadmin_html_path, render_job_html(JOB_RESUME_SYSTEMS_ADMINISTRATOR, "Systems Administrator Resume"))
    write_text(job_cloud_html_path, render_job_html(JOB_RESUME_CLOUD_SECURITY, "Cloud Security Engineer Resume"))
    write_text(phd_html_path, render_phd_html())

    render_pdf(job_html_path, job_pdf_path)
    render_pdf(job_targeted_html_path, job_targeted_pdf_path)
    render_pdf(job_sysadmin_html_path, job_sysadmin_pdf_path)
    render_pdf(job_cloud_html_path, job_cloud_pdf_path)
    render_pdf(phd_html_path, phd_pdf_path)

    replace_docx_document(job_docx_path, job_docx_path, job_docx_lines(JOB_RESUME))
    replace_docx_document(job_docx_path, job_targeted_docx_path, job_docx_lines(JOB_RESUME_NETWORK_SECURITY))
    replace_docx_document(job_docx_path, job_sysadmin_docx_path, job_docx_lines(JOB_RESUME_SYSTEMS_ADMINISTRATOR))
    replace_docx_document(job_docx_path, job_cloud_docx_path, job_docx_lines(JOB_RESUME_CLOUD_SECURITY))
    replace_docx_document(phd_docx_path, phd_docx_path, phd_docx_lines())


if __name__ == "__main__":
    main()
