from django.shortcuts import render

# Create your views here.
def myBusiness(request):
    return render(request,"mybusiness/nuestraEmpresa.html")

def social(request):
    print("hola")
    return "hola";