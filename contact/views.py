from django.conf import settings
from django.shortcuts import render
from django.template.loader import get_template
from django.core.mail import EmailMultiAlternatives

# Create your views here.

def sendMail(mail):
    context = {'mail':mail}
    
    template = get_template('mail.html')
    content = template.render(context)

    email = EmailMultiAlternatives(
        'Un correo de prueba',
        'Mensaje de prueba para producción',
        settings.EMAIL_HOST_USER,
        [mail]
    )

    email.attach_alternative(content, 'text/html')
    email.send()

    print(email)

def contact(request):
    if request.method == 'POST':
        print('Envio de Correo!')
        mail = request.POST.get('txtEmail')

        sendMail(mail)

    return render(request,"contact.html", {})