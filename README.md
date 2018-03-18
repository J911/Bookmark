# Bookmark

## 회원가입

- post /join

```
    body { 
        id,
        pw
    }
```
## 로그인

- post /login 

```
    body {
        id,
        pw
    }
```

## 회원 검색

- get /user/${uid}

## 북마크 등록

- post /bookmark

``` 
    body {
        siteName,
        siteDomain,
        siteDescription,
        type
    }
    type: 0 //public
            1 // private
            3 // delete
    // userId는 세션을 통해 등록
```

## 북마크 검색

- get /bookmark?keyword=${keyword}

## 북마크 신고

- post /bookmark/declare/${bid}

``` 
    body {
        bid,
        description,
        type
    }

    //uid는 세션으로 해결
```

## 북마크 수정
 
- put /bookmark/${bid}

```
    body {
        bid,
        siteName,
        siteDomain,
        siteDescription,
        type
    }
```

## 북마크 삭제

- delete /book/${bid}

```
    body { 
        bid
    }
```

## 북마크 열람 카운트

- get /book/${bid}
