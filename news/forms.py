from django import forms
from .models import Post

class PostForm(forms.ModelForm):
    title = forms.CharField(label="Title:", max_length=100)
    message = forms.CharField(widget=forms.Textarea)

    class Meta:
        model = Post
        fields = ['title', 'message']
