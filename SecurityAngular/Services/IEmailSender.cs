using System.Threading.Tasks;

namespace SecurityAngular.Services
{
    public interface IEmailSender
    {
        Task SendEmailAsync(string email, string subject, string message);
    }

}
