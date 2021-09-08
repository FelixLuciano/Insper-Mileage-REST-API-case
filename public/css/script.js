const rowTemplate_node = document.getElementById("row-template")

function createPost (text) {
  const post_node = rowTemplate_node.content.cloneNode(true)
  const text_node = document.createTextNode(text)

  post_node.querySelector(".comunity-post-article p").appendChild(text_node)
  post_node.querySelector(".comunity-post-article .community-post-name").innerText = communityName

  postTemplate_node.parentNode.insertBefore(post_node, postTemplate_node.nextElementSibling)
}
