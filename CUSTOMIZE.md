# কীভাবে কাস্টমাইজ করবেন - সম্পূর্ণ গাইড

এই গাইড অনুসরণ করে আপনি সহজেই আপনার পোর্টফোলিও ওয়েবসাইট আপডেট করতে পারবেন।

---

## 📝 HOMEPAGE (index.html) - বিভিন্ন সেকশন

### 1️⃣ HERO SECTION (প্রথম সেকশন)
**লোকেশন:** `index.html` লাইন ১২-৮৪

**যা পরিবর্তন করতে পারবেন:**
- নাম: "SUVO" এবং "DEV" বদলে দিন
- শিরোনাম: "Web Developer" পরিবর্তন করুন
- বর্ণনা: "Designing and Developing..." ডিসক্রিপশন বদলান
- স্ট্যাটিস্টিক্স: "7+", "110+", "99%" পরিবর্তন করুন
- ছবি: `https://images.unsplash.com/...` লিংক বদলান
- বাটনের লিংক: `href="contact.html"` এবং `href="work.html"` পরিবর্তন করুন

**উদাহরণ:**
```html
<!-- আপনার নাম পরিবর্তন করুন -->
<span class="text-white">আপনার নাম</span>

<!-- আপনার টাইটেল -->
<p class="text-2xl text-gray-300 font-semibold mb-4">আপনার পদবী</p>

<!-- স্ট্যাটিস্টিক্স -->
<p class="text-indigo-500 font-bold text-2xl">আপনার সংখ্যা+</p>

<!-- ছবি লিংক -->
<img src="আপনার_ছবি_লিংক" alt="Portfolio" />
```

---

### 2️⃣ SKILLS ARCHITECTURE SECTION
**লোকেশন:** `index.html` লাইন ৮৫-১৪৫

**তিনটি প্রধান স্কিল কার্ড:**
```html
<!-- Skill Card 1 - পরিবর্তন করুন -->
<div class="text-4xl mb-4">🎨</div> <!-- emoji বদলান -->
<h3>Frontend Design</h3> <!-- নাম বদলান -->
<p>React, Next.js, Tailwind CSS...</p> <!-- টেকনোলজি বদলান -->
<div class="h-1 w-4/5 bg-indigo-500"></div> <!-- w-4/5 = ৮০%, w-3/5 = ৬০% ইত্যাদি -->
```

**সাব-স্কিলস সেকশন:**
- "Specializations" এ আইটেম যোগ/বদল করুন
- "Expertise Areas" এ আপনার অভিজ্ঞতা যোগ করুন

---

### 3️⃣ SERVICES SECTION (৮ সেবা)
**লোকেশন:** `index.html` লাইন ১৪৬-২১০

**প্রতিটি সেবার কার্ড:**
```html
<div class="bg-slate-800/50 border border-slate-700 p-6 rounded-xl...">
  <div class="text-5xl mb-4">🎯</div> <!-- আপনার emoji -->
  <h3 class="text-lg font-semibold mb-2">Web Application</h3> <!-- সেবার নাম -->
  <p class="text-gray-400 text-sm">Full-stack web apps...</p> <!-- বর্ণনা -->
</div>
```

**৮ টি সেবা আছে - সবই আপনার মত করে পরিবর্তন করুন।**

---

### 4️⃣ FEATURED PROJECTS SECTION
**লোকেশন:** `index.html` লাইন ২১১-২৭৫

**প্রতিটি প্রজেক্টের তথ্য:**
```html
<img src="প্রজেক্ট_ছবির_লিংক" alt="Project" />
<h3 class="text-xl font-semibold mb-2">প্রজেক্টের নাম</h3>
<p class="text-gray-400 text-sm mb-4">প্রজেক্ট বর্ণনা</p>
<span class="text-xs bg-indigo-500/20 text-indigo-400 px-2 py-1 rounded">Technology</span>
```

**৪ টি প্রজেক্ট আছে - নিজের অনুযায়ী আপডেট করুন।**

---

### 5️⃣ TESTIMONIALS SECTION
**লোকেশন:** `index.html` লাইন ২৭৬-৩২৫

**প্রতিটি টেস্টিমোনিয়াল:**
```html
<div class="flex gap-1 mb-4">
  <span class="text-yellow-400">★</span> <!-- ৫ টি স্টার -->
</div>
<p class="text-gray-300 mb-6 italic">"ক্লায়েন্টের মন্তব্য"</p>
<img src="ক্লায়েন্ট_ছবি_লিংক" alt="Client" />
<p class="font-semibold">ক্লায়েন্টের নাম</p>
<p class="text-gray-400 text-sm">ক্লায়েন্টের পদবী</p>
```

**৩ টি টেস্টিমোনিয়াল - আপনার ক্লায়েন্টদের সাথে যোগ করুন।**

---

### 6️⃣ CTA SECTION (কল টু এক্শন)
**লোকেশন:** `index.html` লাইন ৩২৬-৩৪০

```html
<h2>Got a Project in <span>Mind?</span></h2>
<p>আপনার সাধারণ বার্তা</p>
```

---

## 🖼️ ছবি পরিবর্তন করার জন্য

সব জায়গায় `https://images.unsplash.com/` ব্যবহার করা হয়েছে।

**নিজের ছবি বা অন্য কোথাও থেকে ছবি নিতে পারেন:**
1. **Unsplash:** `https://unsplash.com` - বিনামূল্যে ছবি
2. **Pexels:** `https://pexels.com` - বিনামূল্যে ছবি
3. **Pixabay:** `https://pixabay.com` - বিনামূল্যে ছবি
4. **আপনার নিজের ছবি:** একটি ছবি upload করুন আপনার সার্ভারে

**ছবির লিংক বদলানোর উদাহরণ:**
```html
<!-- আগে -->
<img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop" />

<!-- পরে -->
<img src="https://images.unsplash.com/photo-YOUR_ID?w=500&h=600&fit=crop" />
```

---

## 🎨 রঙ পরিবর্তন করতে

**প্রধান রঙের ক্লাস:**
- `text-indigo-500` → `text-blue-500`, `text-purple-500`, `text-pink-500`
- `bg-indigo-500` → `bg-blue-500`, `bg-purple-500`, `bg-pink-500`
- `border-indigo-500` → `border-blue-500`, `border-purple-500`

**Tailwind রঙের অপশন:**
- Red, Amber, Yellow, Lime, Green, Emerald, Teal, Cyan, Blue, Indigo, Purple, Violet, Pink, Rose

---

## 📱 অন্যান্য পেজ কাস্টমাইজ করতে

### about.html
- আপনার বায়োগ্রাফি বদলান
- ছবি আপডেট করুন
- দক্ষতা এবং অভিজ্ঞতা যোগ করুন

### services.html
- ৬ টি সেবা কার্ড - সবই কাস্টমাইজ করুন
- বর্ণনা যোগ করুন

### skills.html
- ৪ টি ক্যাটাগরিতে স্কিল যোগ করুন
- নতুন স্কিল যোগ করুন: `<span>Your Skill</span>`

### work.html
- ৪ টি প্রজেক্ট - সবই আপডেট করুন
- নতুন প্রজেক্ট যোগ করতে কার্ড কপি করুন

### contact.html
- ইমেইল: `sddev960@gmail.com` → আপনার ইমেইল
- ফোন: `+880160172103` → আপনার নম্বর
- লোকেশন: `Sylhet, Bangladesh` → আপনার এলাকা

---

## 🔗 নেভিগেশন লিংক আপডেট

**Header এবং Footer এ লিংক আছে `js/components.js` এ:**

```javascript
// এখানে সব লিংক আছে - পরিবর্তন করুন
<a href="index.html">Home</a>
<a href="about.html">About</a>
<a href="services.html">Services</a>
// ইত্যাদি
```

যদি নতুন পেজ যোগ করেন, এখানে যোগ করুন।

---

## ✏️ দ্রুত সম্পাদনা চেকলিস্ট

```
☐ নাম এবং টাইটেল পরিবর্তন করুন
☐ স্ট্যাটিস্টিক্স আপডেট করুন
☐ প্রোফাইল ছবি পরিবর্তন করুন
☐ স্কিলস আপডেট করুন
☐ সেবাগুলো সম্পাদনা করুন
☐ প্রজেক্টগুলো যোগ করুন
☐ টেস্টিমোনিয়াল যোগ করুন
☐ যোগাযোগ তথ্য আপডেট করুন
☐ সোশ্যাল মিডিয়া লিংক যোগ করুন
☐ রঙ পছন্দ অনুযায়ী পরিবর্তন করুন
```

---

## 🚀 নতুন পেজ যোগ করার উপায়

1. **একটি বিদ্যমান HTML ফাইল খুলুন** (যেমন `services.html`)
2. **Ctrl+A** করে সব সিলেক্ট করুন
3. **Ctrl+C** করে কপি করুন
4. **নতুন ফাইল তৈরি করুন** (যেমন `blog.html`)
5. **Ctrl+V** করে পেস্ট করুন
6. **Title এবং main কন্টেন্ট বদলান**
7. **Header-Footer অটোমেটিক যুক্ত হবে!**
8. **Navigation এ লিংক যোগ করুন** `js/components.js` এ

---

## 💡 ছোট টিপস

- **যে কোন পেজ এ যেতে:** `<a href="file-name.html">Link</a>`
- **ইমেইল লিংক:** `<a href="mailto:your@email.com">Email</a>`
- **ফোন লিংক:** `<a href="tel:+880XXXXXXXXX">Call</a>`
- **বাহ্যিক লিংক:** `<a href="https://website.com" target="_blank">Site</a>`

---

## 🎯 সাধারণ সমস্যা সমাধান

**প্রশ্ন:** ছবি দেখা যাচ্ছে না?
**উত্তর:** URL ঠিক আছে কিনা চেক করুন। `https://` দিয়ে শুরু হতে হবে।

**প্রশ্ন:** রঙ পরিবর্তন হচ্ছে না?
**উত্তর:** ব্রাউজার ক্যাশ ক্লিয়ার করুন (Ctrl+Shift+Delete)

**প্রশ্ন:** নতুন সেকশন যোগ করতে চাই?
**উত্তর:** যেকোনো সেকশন কপি করুন এবং এক্সনটেন্ট চেঞ্জ করুন।

---

**Happy Customizing! 🎉**
