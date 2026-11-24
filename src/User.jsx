
import "./Admin.css";
import "./User.css";

function User() {
  return (
    <div className="user-dashboard">

      <header className="user-header">
        <h2>Student Portal</h2>
        <span>Welcome, Student</span>
      </header>

      <main className="user-content">

        <h1>My Dashboard</h1>
        <p>Welcome to your learning portal.</p>

        <div className="dashboard-stats">
          <div><h2>3</h2><p>My Courses</p></div>
          <div><h2>85%</h2><p>Attendance</p></div>
          <div><h2>8</h2><p>Tests Completed</p></div>
        </div>

        <section className="dashboard-content">
          <h2>My Learning</h2>
          <p>View your courses, study materials, attendance and results here.</p>
        </section>

      </main>
    </div>
  );
}

export default User;
