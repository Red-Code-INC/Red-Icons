async function populate() {
  const requestURL =
    "https://red-code-inc.github.io/Red-Icons/versions.json";
  const request = new Request(requestURL);

  const response = await fetch(request);
  const Red_Icons = await response.json();
//   let Red_Icons = "1.3.6"
  document.getElementById("cdnlnk").value = "<link href=\"https://cdn.jsdelivr.net/gh/Red-Code-INC/Red-Icons@" + Red_Icons.version + "/icons.css\" rel=\"stylesheet\">"
}
populate()