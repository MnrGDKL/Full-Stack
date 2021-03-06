from wsgiref.validate import validator
from rest_framework import serializers
from student_api.models import Path, Student 
from django.utils.timezone import now
 
# class StudentSerializer(serializers.Serializer): 
#     first_name = serializers.CharField(max_length=50) 
#     last_name = serializers.CharField(max_length=50) 
#     number = serializers.IntegerField()
#     # id = serializers.IntegerField()

#     #! CREATE
#     def create(self, validated_data):
#         return Student.objects.create(**validated_data)

#     #! UPDATE
#     def update(self, instance, validated_data):
#         instance.first_name = validated_data.get('first_name', instance.first_name)
#         instance.last_name = validated_data.get('last_name', instance.last_name)
#         instance.number = validated_data.get('number', instance.number)
#         instance.save()
#         return instance

class StudentSerializer(serializers.ModelSerializer):
    days_since_register = serializers.SerializerMethodField()
    class Meta: 
        model = Student 
        fields = ["id", "first_name", "last_name", "number", "days_since_register"] 
        # fields = '__all__' 
        # exclude = ['number']

    def validate_number(self, value): 
        
        if value > 1000: 
            raise serializers.ValidationError("Numbers must be lower than 1000") 
        return value

    def validate_first_name(self, value):
        if value.lower() == 'muhittin': 
            raise serializers.ValidationError("Muhittin can not be a stundent in our school") 
        return value
        
    def get_days_since_register(self, obj): 
        return (now() - obj.register_date).days
    
class PathSerializer(serializers.ModelSerializer):
    students = StudentSerializer(many=True)
    # students = serializers.StringRelatedField(many=True)
    # students = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
    class Meta: 
        model = Path 
        fields = '__all__'
