import { Link } from "react-router-dom";
import SvgLinks from "./hooks/SvgLinks";

function Footer() {
  const siteName = "Trip Chat";
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-center text-center">
              در مورد ما
            </h3>
            <p className="text-gray-300 leading-relaxed text-right">
              این سایت، راهنمای سفری است برای کشف مناظر زیبا و فرهنگ غنی ایران.
              از جنگل‌های سرسبز شمال تا کویرهای خیره‌کننده‌ی جنوب، همه اطلاعات
              لازم برای یک سفر به‌یادماندنی را در اختیارتان قرار می‌دهیم.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4 ">دسترسی سریع</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  خانه
                </Link>
              </li>
              <li>
                <Link
                  to="/internal"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  سفر های داخلی
                </Link>
              </li>
              <li>
                <Link
                  to="/external"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  سفر های خارجی
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold mb-4">ارتباط با ما</h3>
            <div className="flex space-x-4">
              <SvgLinks
                address="https://instagram.com/unk_ehsan"
                target="_blank"
                rel="noopener noreferrer"
                classLink="text-gray-300 hover:text-pink-400 transition-colors"
                classLink2="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                path="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
              />
              <SvgLinks
                address="https://t.me/venwhen"
                target="_blank"
                rel="noopener noreferrer"
                classLink="text-gray-300 hover:text-blue-400 transition-colors"
                classLink2="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                path="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"
              />
              <SvgLinks
                address="https://github.com/unkmitm/tripchat"
                target="_blank"
                rel="noopener noreferrer"
                classLink="text-gray-300 hover:text-white transition-colors"
                classLink2="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                path="M12 0C5.37 0 0 5.373 0 12c0 5.302 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73 1.205.086 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.76-1.605-2.665-.3-5.466-1.335-5.466-5.93 0-1.31.468-2.38 1.236-3.22-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.48 11.48 0 013.003-.403c1.02.004 2.045.137 3.003.403 2.29-1.552 3.296-1.23 3.296-1.23.653 1.653.243 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.803 5.625-5.475 5.922.43.372.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.216.694.825.576C20.565 21.796 24 17.298 24 12c0-6.627-5.373-12-12-12z"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 py-4 mt-10">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-gray-400 text-center">
            &copy; {new Date().getFullYear()} {siteName}. تمامی حقوق محفوظ است.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
