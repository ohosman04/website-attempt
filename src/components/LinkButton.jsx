function LinkButton({ action, value, className }) {
  return (
    <div className={className}>
      <form action={action}>
        <input type="submit" value={value} />
      </form>
      <p></p>
    </div>
  );
}

export default LinkButton;
