import "../assets/sample-arch.css"

export const SampleArch = () => {
    return (
        <div>
            <div className="container">
                <img className="profile-pic" src="https://via.placeholder.com/200x200" alt="Profile picture" />
                <div className="name">John Doe</div>
                <div className="specialization">Architecture Specialist</div>
                <div className="contact-info">
                    <a href="tel:+11234567890"><i className="fa fa-phone"></i>123-456-7890</a>
                    <a href="mailto:johndoe@example.com"><i className="fa fa-envelope"></i>johndoe@example.com</a>
                    <a href="https://www.linkedin.com/in/johndoe/" target="_blank"><i className="fa fa-linkedin"></i>LinkedIn</a>
                </div>
                <div className="edit-profile" onClick="openEditModal()">
                    <i className="fa fa-pencil"></i>Edit Profile
                </div>
                <a className="looking-for-specialist" href="projects.html">
                    Looking for a specialist? See the projects
                </a>
                <a className="events" href="events.html">
                    <i className="fa fa-calendar"></i>Don't miss the upcoming events. See the events
                </a>
            </div>
            <div id="edit-modal" className="modal">
                <div className="modal-content">
                    <h2>Edit Profile</h2>
                    <form>
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" required />
                        <br />
                        <label htmlFor="specialization">Specialization:</label>
                        <input type="text" id="specialization" name="specialization" required />
                        <br />
                        <label htmlFor="phone">Phone Number:</label>
                        <input type="tel" id="phone" name="phone" required />
                        <br />
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required />
                        <br />
                        <label htmlFor="linkedin">LinkedIn:</label>
                        <input type="url" id="linkedin" name="linkedin" />
                        <br />
                        <button type="submit">Save</button>
                    </form>
                </div>
            </div>
        </div>
    )
}