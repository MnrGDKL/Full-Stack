from django.shortcuts import render, redirect
from django.contrib import messages
from .forms import StudentForm

def index(request):
    return render(request, 'student/index.html')

def student_page(request):
    # print(request.POST)
    form = StudentForm(request.POST or None)
    if form.is_valid():
        # print(form.cleaned_data.get("first_name"), form.cleaned_data.get("last_name"), form.cleaned_data.get("number"))
        student = form.save()
        if "profile_pic" in request.FILES:
            student.profile_pic = request.FILES["profile_pic"]
            student.save()
        return redirect('student')


    context={
        'form': form
    }

    messages.success(request,"Student saved successfully")
    messages.error(request,"Student failed message")

    return render(request,'student/student.html', context)
