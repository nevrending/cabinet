@extends('cabinet::admin.layout')

@section('title')
  {{ Lang::get('cabinet::wardrobe.forgot_password') }}
@stop

@section('content')
  <div id="login-region">
    <h1>{{ Lang::get('cabinet::wardrobe.forgot_password') }}</h1>
    @if (Session::has('error'))
      <div class="alert alert-block alert-error">
        <p>
          {{ trans(Session::get('reason')) }}
          {{ trans(Session::get('cabinet::reason')) }}
        </p>
      </div>
    @elseif (Session::has('success'))
      <div class="alert alert-block alert-success">
        <p>{{ Lang::get('cabinet::wardrobe.forgot_sent') }}</p>
      </div>
    @endif

    <form method="post" action="/wardrobe/login/remind" class="form-horizontal">
      <p><input type="text" id="inputEmail" name="email" placeholder="{{ Lang::get('cabinet::wardrobe.account_email') }}"></p>
      <button type="submit" class="btn btn-primary">{{ Lang::get('cabinet::wardrobe.forgot_send') }}</button>
      </div>
    </form>
  </div>
@stop
