import { Container } from "./style";

function Input({ label, register, name, error, ...rest }) {
  return (
    <Container isErrored={!!error}>
      <span>
        {label} {!!error && <span> - {error}</span>}
      </span>
      <input {...register(name)} {...rest} className="border" />
    </Container>
  );
}

export default Input;
