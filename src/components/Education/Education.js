import "./Education.css";
import React from "react";
import avatar from "../../assets/images/avatar1(2).png";
import { useTranslation } from 'react-i18next';

function Education() {
    return (
        <div className="education-section">
            <div className="education-content">
                <h2 className="education-title">Education</h2>
                <table className="education-table">
                    <thead>
                        <tr>
                            <th>Degree</th>
                            <th>University</th>
                            <th>Department</th>
                            <th>Years</th>
                            <th>GPA</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td data-label="Degree">Bachelor's</td>
                            <td data-label="University">Anadolu University</td>
                            <td data-label="Department">Management Information Systems</td>
                            <td data-label="Years">2022 – 2025</td>
                            <td data-label="GPA">—</td>
                        </tr>
                        <tr>
                            <td data-label="Degree">Associate</td>
                            <td data-label="University">Fırat University</td>
                            <td data-label="Department">Computer Programming</td>
                            <td data-label="Years">2020 – 2022</td>
                            <td data-label="GPA">3.41 / 4</td>
                        </tr>
                    </tbody>

                </table>
            </div>
            <div className="avatar-wrapper">
                <img src={avatar} alt="Avatar" className="meditation-avatar" />
            </div>
        </div>
    );
}

export default Education;