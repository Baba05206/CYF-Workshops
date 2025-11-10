export function ProfilePreview(profile, options = {}) {
  // added , options = {}
  const { available = true, shortForm = false } = options; //added
  const preview = document.createElement("aside");
  //added this block
  if (!available) {
    const notice = document.createElement("p");
    notice.textContent = "Profile preview unavailable";
    preview.appendChild(notice);
    return preview;
  }
  const picture = document.createElement("img");
  picture.src = profile.pictureSrc;
  picture.alt = "";
  picture.dataset.testid = "profilePicture";
  preview.appendChild(picture); //added

  const name = document.createElement("p");
  name.textContent = profile.name;
  name.dataset.testid = "profileName";
  preview.appendChild(name); //added

  if (!shortForm) {
    //added
    const bio = document.createElement("p");
    bio.textContent = profile.bio;
    bio.dataset.testid = "profileBio";
    preview.appendChild(bio); //added
  }
  // preview.appendChild(picture); // commented these
  // preview.appendChild(name);
  // preview.appendChild(bio);

  return preview;
}
