export default function Avatar({ size }) {
  return (
    <div className="avatar">
      <div className={`rounded-full w-${size} ring ring-primary ring-offset-base-100 ring-offset-2`}>
        <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
      </div>
    </div>
  );
}
