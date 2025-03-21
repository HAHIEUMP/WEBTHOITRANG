import React from 'react';

function Footer(props) {
  return (
    <div>
      <footer className="footer-area section_gap text-center">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-2 col-md-6 single-footer-widget">
              <h4>Sản phẩm</h4>
              <ul>
                <li><a href="#">Thời trang nam</a></li>
                <li><a href="#">Thời trang nữ</a></li>
                <li><a href="#">Phụ kiện</a></li>
                <li><a href="#">Giày dép</a></li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6 single-footer-widget">
              <h4>Chính sách</h4>
              <ul>
                <li><a href="#">Chính sách đổi trả</a></li>
                <li><a href="#">Chính sách bảo hành</a></li>
                <li><a href="#">Chính sách vận chuyển</a></li>
                <li><a href="#">Điều khoản dịch vụ</a></li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6 single-footer-widget">
              <h4>Hỗ trợ</h4>
              <ul>
                <li><a href="#">Hướng dẫn mua hàng</a></li>
                <li><a href="#">Câu hỏi thường gặp</a></li>
                <li><a href="#">Liên hệ hỗ trợ</a></li>
                <li><a href="#">Tư vấn khách hàng</a></li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6 single-footer-widget">
              <h4>Kết nối</h4>
              <ul>
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Instagram</a></li>
                <li><a href="#">TikTok</a></li>
                <li><a href="#">YouTube</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom row justify-content-center text-center">
            <p className="footer-text m-0 col-lg-8 col-md-12">
              Bản quyền ©2025 Bảo Chuyên <i className="fa fa-heart-o" aria-hidden="true" />
              <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer"></a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;