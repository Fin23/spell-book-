<script>
import Gun from 'gun';
import {username, user} from './user';

function signout(){
    user.leave();
    username.set('');
}


</script>

<header>
    {#if $username}
 <div class="user-bio">
     <span>
         <string>
             {$username}
         </string>
        </span>
         <img alt="avatar" src={`https://avatars.dicebear.com/api/initials/${username}.svg`}>
        </div>
         <button class="signout-button" on:click={signout}>sign out</button>
 
{:else}
<h3>Gun.js Chat</h3>
    {/if}
</header>