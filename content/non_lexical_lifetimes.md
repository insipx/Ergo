+++
title = "Non-Lexical Lifetimes are Awesome!"
date = 2018-08-31
category = "test"
+++

# Hey all

This is a small example post of stuff you can do with the `ergo` theme.
We'll try to represent all possible markdown and shortcode combinations here
so you can develop easily.

## Here's some lists

- let's list some stuff
- unordered, of course.

1. We can also order lists
    1. And nesting here works too
    2. We can do whatever we want!
2. And drop back to the original indentation.

# Headers

## Smaller

### Smaller still!

#### Can't really get much smaller than this

##### Even if you try

###### It won't do anything

We can also *italisize* stuff or however that's spelled.  I **don't** know how to spell.

# Code

Want some Rust code?  We got Rust code.

```rust
// `vst` uses macros, so we'll need to specify that we're using them!
#[macro_use]
extern crate vst;

// We're implementing a trait `Plugin` that does all the VST-y stuff for us.
impl Plugin for Whisper {
    fn get_info(&self) -> Info {
        Info {
            name: "Whisper".to_string()
        }
    }
}
```

We can also add a filename to our code blocks which is super useful when
providing tutorials, etc.  Here's some HTML we can insert into our
markdown file right before the code block.  (Meta, right?)

<div class='filename'>
  <div>www/index.html</div>
</div>

```html
<div class='filename'>
  <div>src/lib.rs</div>
</div>
```

If we want, we can also `specify inline code` which is useful for `the small stuff`.

# Horizontal rules

We have them!

---
