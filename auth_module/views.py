from django.shortcuts import render
from auth_module.models import User123
from django.contrib.auth.hashers import make_password
from django.contrib.auth import authenticate
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

class CreateUserView(APIView):
    def post(self,request,*args,**kwargs):
        data = request.data        
        student_name = data['student_name']
        password=data['pass']
        email = data['email']
        dob=data['dob']
        new_user = User123.objects.create(
            student_name=student_name,
            password=make_password(password),
            email=email,
            dob=dob
        )
        new_user.save()
        return render(request, 'success.html')


# Create your views here.
def create_user(request):
    print('ere')
    if request.method == 'POST':
        student_name = request.POST['student_name']
        password=request.POST['password']
        email = request.POST['email']
        dob=request.POST['dob']

        print(student_name, password, email, dob)
        
        new_user = User123.objects.create(
            student_name=student_name,
            password=make_password(password),
            email=email,
            dob=dob
        )
        new_user.save()
        return render(request, 'success.html')
    return render(request, 'user_form.html')




class UserLoginAPIView(APIView):
    def post(self, request, format=None):
        email = request.data.get('email')
        password = request.data.get('password')

        if email is None or password is None:
            return Response({'error': 'Please provide both email and password'}, status=status.HTTP_400_BAD_REQUEST)
        user = authenticate(email=email, password=password)

        if user is None:
 
            return Response({'error': 'Invalid Credentials'}, status=status.HTTP_401_UNAUTHORIZED)
        return Response({'success': 'User logged in successfully'}, status=status.HTTP_200_OK)

from django.http import JsonResponse
from .models import QuestionsTable  

def my_question(request):
    questions = QuestionsTable.objects.all()
       
    data = {
        'questions': [
            {
                'QId': question.QId,
                'Question': question.Question,
                'Option1': question.Option1,
                'Option2': question.Option2,
                'Option3': question.Option3,
                'Option4': question.Option4,
                'Answer':question.Answer
            }
            for question in questions
        ]
    }

   
    return JsonResponse(data)