
import { useEffect, useState } from "react";
import "./Admin.css";


const initialData = {
  Students: [
    { id: 1, name: "Aarav Kumar", email: "aarav@example.com", phone: "9876543210", course: "Class 10" },
    { id: 2, name: "Sara Khan", email: "sara@example.com", phone: "9876543211", course: "Class 12" }
  ],
  Teachers: [
    { id: 3, name: "Rahul Sharma", email: "rahul@example.com", phone: "9876543212", subject: "Mathematics" }
  ],
  Courses: [
    { id: 4, name: "Class 10", description: "Secondary school coaching", duration: "1 Year", fee: "12000" },
    { id: 5, name: "Class 12", description: "Higher secondary coaching", duration: "1 Year", fee: "18000" }
  ],
  Admissions: [
    { id: 6, name: "Aarav Kumar", email: "aarav@example.com", course: "Class 10", status: "Pending" }
  ],
  Results: [
    { id: 7, name: "Sara Khan", course: "Class 12", exam: "Final Exam", marks: "88%", status: "Published" }
  ]
};

const sectionFields = {
  Students: [
    { key: "name", label: "Student Name" },
    { key: "email", label: "Email" },
    { key: "phone", label: "Phone" },
    { key: "course", label: "Course" }
  ],
  Teachers: [
    { key: "name", label: "Teacher Name" },
    { key: "email", label: "Email" },
    { key: "phone", label: "Phone" },
    { key: "subject", label: "Subject" }
  ],
  Courses: [
    { key: "name", label: "Course Name" },
    { key: "description", label: "Description" },
    { key: "duration", label: "Duration" },
    { key: "fee", label: "Fee" }
  ],
  Admissions: [
    { key: "name", label: "Student Name" },
    { key: "email", label: "Email" },
    { key: "course", label: "Course" },
    { key: "status", label: "Status" }
  ],
  Results: [
    { key: "name", label: "Student Name" },
    { key: "course", label: "Course" },
    { key: "exam", label: "Exam" },
    { key: "marks", label: "Marks" },
    { key: "status", label: "Status" }
  ]
};


function loadData() {
  try {
    const saved = localStorage.getItem("edu_admin_data");
    return saved ? { ...initialData, ...JSON.parse(saved) } : initialData;
  } catch {
    return initialData;
  }
}

function Admin() {
  const [data, setData] = useState(loadData);
  const [activeSection, setActiveSection] = useState("Dashboard");
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState({});

  useEffect(() => {
    localStorage.setItem("edu_admin_data", JSON.stringify(data));
  }, [data]);

  const totalStudents = data.Students.length;
  const totalTeachers = data.Teachers.length;
  const totalCourses = data.Courses.length;
  const pendingAdmissions = data.Admissions.filter(
    item => item.status === "Pending"
  ).length;

  function openAddForm() {
    const fields = sectionFields[activeSection] || [];
    const emptyForm = {};
    fields.forEach(field => {
      emptyForm[field.key] = "";
    });

    setForm(emptyForm);
    setEditingId(null);
    setShowForm(true);
  }

  function openEditForm(item) {
    const editable = {};
    sectionFields[activeSection].forEach(field => {
      editable[field.key] = item[field.key] || "";
    });

    setForm(editable);
    setEditingId(item.id);
    setShowForm(true);
  }

  function handleChange(e) {
    setForm(previous => ({
      ...previous,
      [e.target.name]: e.target.value
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const section = activeSection;

    if (editingId !== null) {
      setData(previous => ({
        ...previous,
        [section]: previous[section].map(item =>
          item.id === editingId ? { ...item, ...form } : item
        )
      }));
    } else {
      const newItem = {
        id: Date.now(),
        ...form
      };

      setData(previous => ({
        ...previous,
        [section]: [newItem, ...previous[section]]
      }));
    }

    setShowForm(false);
    setEditingId(null);
    setForm({});
  }

  function deleteItem(id) {
    const confirmed = window.confirm("Are you sure you want to delete this record?");
    if (!confirmed) return;

    setData(previous => ({
      ...previous,
      [activeSection]: previous[activeSection].filter(item => item.id !== id)
    }));
  }

  function changeSection(section) {
    setActiveSection(section);
    setSearch("");
    setShowForm(false);
  }

  const records = sectionFields[activeSection]
    ? data[activeSection].filter(item =>
        Object.values(item).join(" ").toLowerCase().includes(search.toLowerCase())
      )
    : [];

  return (
    <div className="admin-layout">

      <aside className="admin-sidebar">
        <div className="admin-brand">
          <span>EDU</span> ADMIN
        </div>

        <p className="admin-menu-label">MAIN MENU</p>

        {["Dashboard", "Students", "Teachers", "Courses", "Admissions", "Results"].map(section => (
          <button
            key={section}
            className={`admin-nav-item ${activeSection === section ? "selected" : ""}`}
            onClick={() => changeSection(section)}
          >
            <span>
              {{
                Dashboard: "▦",
                Students: "♙",
                Teachers: "♧",
                Courses: "▤",
                Admissions: "✉",
                Results: "▥"
              }[section]}
            </span>
            {section}
          </button>
        ))}

        <div className="admin-sidebar-bottom">
          <span>Education Management</span>
          <small>Admin Panel · Demo</small>
        </div>
      </aside>

      <main className="admin-main">

        <header className="admin-topbar">
          <div>
            <span className="admin-top-label">EDUCATION MANAGEMENT</span>
            <h1>{activeSection}</h1>
          </div>

          <div className="admin-profile">
            <div className="admin-profile-avatar">A</div>
            <div>
              <strong>Administrator</strong>
              <small>Admin Account</small>
            </div>
          </div>
        </header>

        {activeSection === "Dashboard" ? (
          <>
            <div className="admin-welcome">
              <div>
                <h2>Welcome to your dashboard!</h2>
                <p>Manage your coaching centre from one place.</p>
              </div>
              <span>ADMIN PANEL</span>
            </div>

            <section className="admin-stat-grid">
              <div className="admin-stat-card">
                <span className="admin-stat-icon blue">♙</span>
                <p>Total Students</p>
                <h2>{totalStudents}</h2>
                <small>Registered student records</small>
              </div>

              <div className="admin-stat-card">
                <span className="admin-stat-icon purple">♧</span>
                <p>Total Teachers</p>
                <h2>{totalTeachers}</h2>
                <small>Faculty records</small>
              </div>

              <div className="admin-stat-card">
                <span className="admin-stat-icon orange">▤</span>
                <p>Total Courses</p>
                <h2>{totalCourses}</h2>
                <small>Available courses</small>
              </div>

              <div className="admin-stat-card">
                <span className="admin-stat-icon green">✉</span>
                <p>Pending Admissions</p>
                <h2>{pendingAdmissions}</h2>
                <small>Applications awaiting review</small>
              </div>
            </section>

            <section className="admin-panel-card">
              <div className="admin-panel-heading">
                <div>
                  <h2>Quick Management</h2>
                  <p>Choose a section to manage its records.</p>
                </div>
              </div>

              <div className="admin-quick-grid">
                {["Students", "Teachers", "Courses", "Admissions", "Results"].map(section => (
                  <button
                    key={section}
                    onClick={() => changeSection(section)}
                  >
                    <strong>{section}</strong>
                    <span>Manage records →</span>
                  </button>
                ))}
              </div>
            </section>
          </>
        ) : (
          <section className="admin-panel-card admin-record-panel">

            <div className="admin-panel-heading">
              <div>
                <h2>{activeSection} Management</h2>
                <p>Add, edit, search or delete {activeSection.toLowerCase()} records.</p>
              </div>

              <button className="admin-add-btn" onClick={openAddForm}>
                + Add {activeSection.slice(0, -1)}
              </button>
            </div>

            <input
              className="admin-search"
              type="search"
              placeholder={`Search ${activeSection.toLowerCase()}...`}
              value={search}
              onChange={e => setSearch(e.target.value)}
            />

            {showForm && (
              <form className="admin-edit-form" onSubmit={handleSubmit}>
                <h3>{editingId !== null ? "Edit Record" : "Add New Record"}</h3>

                <div className="admin-form-grid">
                  {sectionFields[activeSection].map(field => (
                    <label key={field.key}>
                      {field.label}
                      <input
                        name={field.key}
                        value={form[field.key] || ""}
                        onChange={handleChange}
                        placeholder={`Enter ${field.label.toLowerCase()}`}
                        required
                      />
                    </label>
                  ))}
                </div>

                <div className="admin-form-actions">
                  <button className="admin-save-btn" type="submit">
                    {editingId !== null ? "Save Changes" : "Add Record"}
                  </button>

                  <button
                    className="admin-cancel-btn"
                    type="button"
                    onClick={() => setShowForm(false)}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            )}

            <div className="admin-table-wrap">
              <table className="admin-table">
                <thead>
                  <tr>
                    {sectionFields[activeSection].map(field => (
                      <th key={field.key}>{field.label}</th>
                    ))}
                    <th>Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {records.map(item => (
                    <tr key={item.id}>
                      {sectionFields[activeSection].map(field => (
                        <td key={field.key}>{item[field.key]}</td>
                      ))}

                      <td>
                        <div className="admin-row-actions">
                          <button onClick={() => openEditForm(item)}>
                            Edit
                          </button>
                          <button onClick={() => deleteItem(item.id)}>
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}

                  {records.length === 0 && (
                    <tr>
                      <td
                        colSpan={sectionFields[activeSection].length + 1}
                        className="admin-empty"
                      >
                        No records found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            <p className="admin-record-count">
              Showing {records.length} record(s)
            </p>

          </section>
        )}

      </main>
    </div>
  );
}

export default Admin;
