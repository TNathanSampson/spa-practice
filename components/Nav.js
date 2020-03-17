export default links => `<nav>
  <i class="fas fa-bars"></i>
  <ul class="hidden--mobile nav-links">
  ${links
    .map(
      link => `<li><a href="#" aria-label=${link.text}>${link.title}</a></li>`
    )
    .join("")}
  </ul>
</nav>`;

// export default links => `
// <nav>
//   <i class="fas fa-bars"></i>
//   <ul class="hidden--mobile nav-links">
//   ${links.reduce(
//     (html, link) =>
//       html + `<li><a href="#" title="${link.title}">${link.text}</a></li>`,
//     ``
//   )}
//   </ul>
// </nav>
// `;
