import { useState } from 'react'
import { Lock, LogIn, WashingMachine } from 'lucide-react'

const ADMIN_URL = 'http://127.0.0.1:5174/FE_Admin_Web_HiepHung/'
const CUSTOMER_WEB_URL = 'http://127.0.0.1:5173/FE_Web_HiepHung/'
const DEMO_PASSWORD = 'admin123'

function App() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  function submit(event) {
    event.preventDefault()
    if (!password.trim()) {
      setError('Vui lòng nhập mật khẩu demo.')
      return
    }
    if (password !== DEMO_PASSWORD) {
      setError('Mật khẩu demo chưa đúng.')
      return
    }
    localStorage.setItem('myhiep_admin', '1')
    window.location.href = `${ADMIN_URL}?auth=1`
  }

  return (
    <main className="grid min-h-screen place-items-center px-4">
      <form onSubmit={submit} className="card w-full max-w-md p-6">
        <div className="mb-5 border-b border-stone-200 pb-5">
          <span className="mb-4 grid size-11 place-items-center rounded-md border border-sky-200 bg-sky-100 text-sky-700">
            <WashingMachine />
          </span>
          <div>
            <h1 className="text-2xl font-bold text-stone-950">Sổ vận hành Hiệp</h1>
            <p className="mt-2 text-sm leading-6 text-stone-600">
              Lối vào riêng cho nhân viên kiểm đơn, đổi trạng thái, sửa bảng giá và cập nhật thông tin cửa hàng.
            </p>
          </div>
        </div>
        <label>
          <span className="label">Mật khẩu demo</span>
          <div className="relative">
            <Lock className="absolute left-3 top-3.5 text-stone-400" size={18} />
            <input
              className="field pl-10"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="admin123"
            />
          </div>
        </label>
        {error && <p className="mt-3 text-sm font-semibold text-rose-600">{error}</p>}
        <button className="btn-primary mt-5 w-full">
          <LogIn size={18} /> Đăng nhập
        </button>
        <a className="mt-4 block text-center text-sm font-semibold text-sky-700" href={CUSTOMER_WEB_URL}>
          Về web khách
        </a>
      </form>
    </main>
  )
}

export default App
