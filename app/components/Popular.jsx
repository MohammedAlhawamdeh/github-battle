import React from 'react'
import {fetchPopRepo} from '../util/api'
import { hashtag } from "../icons/icon";


const Popular = () => {
    const [data, setData] = React.useState(null);
    const [language, setLanguage] = React.useState("All");
    const languages = ["All", "JavaScript", "Python", "Ruby", "CSS", "Java"];

    const onChange = (e) => {
      setLanguage(e.target.value);
    };

    React.useEffect(() => {
      let subscriped = false;
      fetchPopRepo(language).then((repos) => {
        if (!subscriped) {
          setData(repos);
        }
      });
      return () => {
        subscriped = true;
      };
    }, [language]);


function TableHead() {
  return (
    <thead>
      <tr>
        <th style={{ width: "5%" }}>{hashtag}</th>
        <th style={{ width: "50%" }}>Repository</th>
        <th style={{ width: "15%" }}>Stars</th>
        <th style={{ width: "15%" }}>Forks</th>
        <th style={{ width: "15%" }}>Open Issues</th>
      </tr>
    </thead>
  );
}

function TableRow({
  index,
  owner,
  stargazers_count,
  forks,
  open_issues,
  name,
}) {
  const { login, avatar_url } = owner;
  return (
    <tr>
      <td>{index + 1}</td>
      <td>
        <div className="row gap-md">
          <img
            width={32}
            height={32}
            className="avatar"
            src={avatar_url}
            alt={`Avatar for ${login}`}
          />
          <a href={`https://github.com/${login}/${name}`}>{name}</a>
        </div>
      </td>
      <td>{stargazers_count}</td>
      <td>{forks}</td>
      <td>{open_issues}</td>
    </tr>
  );
}
  return (
    <main className="stack main-stack animate-in">
      <div className="split">
        <h1>Popular</h1>
        <select onChange={onChange}>
          {languages.map((lang) => (
            <option key={lang} value={lang}>
              {lang}
            </option>
          ))}
        </select>
      </div>
      <table>
        <TableHead />
        <tbody>
          {data?.map((repo, index) => {
            return <TableRow key={index} index={index} {...repo} />;
          })}
        </tbody>
      </table>
    </main>
  );
}

export default Popular