import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LectureDiscussion from './LectureDiscussion';

const ClassDetails = ({ match }) => {
  const [classData, setClassData] = useState(null);

  useEffect(() => {
    const fetchClassDetails = async () => {
      try {
        const res = await axios.get(`/api/class/${match.params.classId}`);
        setClassData(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchClassDetails();
  }, [match.params.classId]);

  if (!classData) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">{classData.title}</h1>
      <p className="text-lg mt-2">{classData.description}</p>
      <div className="mt-6">
        <h2 className="text-2xl font-semibold">Units</h2>
        <ul>
          {classData.units.map(unit => (
            <li key={unit.id} className="mt-4">
              <h3 className="text-xl font-semibold">{unit.title}</h3>
              <ul>
                {unit.sessions.map(session => (
                  <li key={session.id} className="ml-6">
                    <h4 className="text-lg">{session.title}</h4>
                    <LectureDiscussion sessionId={session.id} />
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ClassDetails;
