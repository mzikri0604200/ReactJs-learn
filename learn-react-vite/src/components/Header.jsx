/* eslint-disable react/prop-types */
export default function Header({ author }) {
  return <h1>Learn {author ? author : '2024'}</h1>;
}
