import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about-section">
      <div className="container">
        {/* Banner giới thiệu */}
        <div className="about-banner">
          <h1>Giới Thiệu Về Chúng Tôi</h1>
          <p>Chất lượng là ưu tiên hàng đầu - Sự hài lòng của khách hàng là thành công của chúng tôi</p>
        </div>
        
        {/* Giới thiệu về công ty */}
        <div className="about-intro">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-content">
                <h2>Về Chúng Tôi</h2>
                <p className="highlight">Chúng tôi tự hào là thương hiệu hàng đầu trong lĩnh vực cung cấp các sản phẩm chất lượng cao, mang đến trải nghiệm mua sắm tuyệt vời cho khách hàng.</p>
                <p>Được thành lập vào năm 2010, chúng tôi đã không ngừng phát triển và mở rộng, luôn đặt chất lượng sản phẩm và sự hài lòng của khách hàng lên hàng đầu. Với đội ngũ nhân viên giàu kinh nghiệm và tâm huyết, chúng tôi cam kết mang đến những sản phẩm tốt nhất với giá cả cạnh tranh nhất.</p>
                <p>Mỗi sản phẩm của chúng tôi đều được lựa chọn kỹ lưỡng, đảm bảo đáp ứng các tiêu chuẩn khắt khe về chất lượng và an toàn. Chúng tôi tự hào là đối tác tin cậy của hàng nghìn khách hàng trong suốt thời gian qua.</p>
              </div>
            </div>
            <div className="col-lg-6">
             
            </div>
          </div>
        </div>
        
        {/* Tầm nhìn & Sứ mệnh */}
        <div className="vision-mission">
          <div className="row">
            <div className="col-md-6">
              <div className="vision-box">
                <h3>Tầm Nhìn</h3>
                <p>Trở thành thương hiệu hàng đầu trong lĩnh vực, được khách hàng tin tưởng và lựa chọn. Chúng tôi hướng đến việc mở rộng thị trường và phát triển bền vững, đồng thời không ngừng đổi mới để đáp ứng nhu cầu ngày càng cao của khách hàng.</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="mission-box">
                <h3>Sứ Mệnh</h3>
                <p>Cung cấp những sản phẩm chất lượng cao với giá cả hợp lý, mang đến trải nghiệm mua sắm thuận tiện và hài lòng. Chúng tôi cam kết đồng hành cùng khách hàng, hiểu và đáp ứng mọi nhu cầu, từ đó xây dựng mối quan hệ lâu dài và bền vững.</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Giá trị cốt lõi */}
        <div className="core-values">
          <h2>Giá Trị Cốt Lõi</h2>
          <div className="row">
            <div className="col-md-3">
              <div className="value-item">
                <div className="value-icon">C</div>
                <h4>Chất Lượng</h4>
                <p>Cam kết cung cấp sản phẩm chất lượng cao, đáp ứng mọi tiêu chuẩn khắt khe.</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="value-item">
                <div className="value-icon">T</div>
                <h4>Trung Thực</h4>
                <p>Minh bạch trong mọi giao dịch, xây dựng niềm tin với khách hàng và đối tác.</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="value-item">
                <div className="value-icon">Đ</div>
                <h4>Đổi Mới</h4>
                <p>Không ngừng sáng tạo và cải tiến để mang đến những trải nghiệm tốt nhất.</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="value-item">
                <div className="value-icon">T</div>
                <h4>Tận Tâm</h4>
                <p>Lắng nghe và phục vụ khách hàng với tất cả sự nhiệt tình và chuyên nghiệp.</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Thành tựu */}
        <div className="achievements">
          <h2>Thành Tựu Của Chúng Tôi</h2>
          <div className="row">
            <div className="col-md-3">
              <div className="achievement-item">
                <div className="achievement-number">10+</div>
                <div className="achievement-text">Năm kinh nghiệm</div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="achievement-item">
                <div className="achievement-number">5000+</div>
                <div className="achievement-text">Khách hàng hài lòng</div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="achievement-item">
                <div className="achievement-number">1000+</div>
                <div className="achievement-text">Sản phẩm đa dạng</div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="achievement-item">
                <div className="achievement-number">15+</div>
                <div className="achievement-text">Giải thưởng</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Đội ngũ của chúng tôi */}
        <div className="our-team">
          <h2>Đội Ngũ Của Chúng Tôi</h2>
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="team-member">
                <div className="member-info">
                  <h4>Nguyễn Văn A</h4>
                  <span>Giám đốc điều hành</span>
                  <p>Với hơn 15 năm kinh nghiệm trong ngành, ông A đã dẫn dắt công ty phát triển vững mạnh.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="team-member">
                <div className="member-info">
                  <h4>Trần Thị B</h4>
                  <span>Giám đốc marketing</span>
                  <p>Chuyên gia marketing với nhiều chiến dịch thành công, giúp thương hiệu ngày càng phát triển.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="team-member">
                <div className="member-info">
                  <h4>Lê Văn C</h4>
                  <span>Giám đốc sản phẩm</span>
                  <p>Người đứng sau những sản phẩm chất lượng cao và luôn đổi mới để đáp ứng nhu cầu khách hàng.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="team-member">
                <div className="member-info">
                  <h4>Phạm Thị D</h4>
                  <span>Giám đốc dịch vụ khách hàng</span>
                  <p>Chuyên gia trong việc xây dựng trải nghiệm khách hàng xuất sắc và dịch vụ chăm sóc tận tâm.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Thông tin liên hệ */}
        <div className="contact-info">
          <h2>Thông Tin Liên Hệ</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="contact-item">
                <h4>Địa Chỉ</h4>
                <p>123 Đường ABC, Quận XYZ, TP. Hồ Chí Minh</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="contact-item">
                <h4>Điện Thoại</h4>
                <p>(028) 1234 5678</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="contact-item">
                <h4>Email</h4>
                <p>info@website.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;