# VPSDemo
Demo for VPS Checkout using Cloudfront

# Cloudfront Configuration
```javascript
{
    "Distribution": {
        "Status": "InProgress",
        "DomainName": "d1gz95ra2gm7q7.cloudfront.net",
        "InProgressInvalidationBatches": 0,
        "DistributionConfig": {
            "Comment": "VPS Checkout Demo",
            "CacheBehaviors": {
                "Items": [
                    {
                        "TrustedSigners": {
                            "Enabled": false,
                            "Quantity": 0
                        },
                        "LambdaFunctionAssociations": {
                            "Quantity": 0
                        },
                        "TargetOriginId": "VPS devel",
                        "ViewerProtocolPolicy": "https-only",
                        "ForwardedValues": {
                            "Headers": {
                                "Quantity": 0
                            },
                            "Cookies": {
                                "Forward": "none"
                            },
                            "QueryStringCacheKeys": {
                                "Quantity": 0
                            },
                            "QueryString": false
                        },
                        "MaxTTL": 31536000,
                        "PathPattern": "/Vps*",
                        "SmoothStreaming": false,
                        "DefaultTTL": 86400,
                        "AllowedMethods": {
                            "Items": [
                                "HEAD",
                                "DELETE",
                                "POST",
                                "GET",
                                "OPTIONS",
                                "PUT",
                                "PATCH"
                            ],
                            "CachedMethods": {
                                "Items": [
                                    "HEAD",
                                    "GET",
                                    "OPTIONS"
                                ],
                                "Quantity": 3
                            },
                            "Quantity": 7
                        },
                        "MinTTL": 0,
                        "Compress": true
                    }
                ],
                "Quantity": 1
            },
            "IsIPV6Enabled": true,
            "Logging": {
                "Bucket": "",
                "Prefix": "",
                "Enabled": false,
                "IncludeCookies": false
            },
            "WebACLId": "",
            "Origins": {
                "Items": [
                    {
                        "OriginPath": "",
                        "CustomOriginConfig": {
                            "OriginSslProtocols": {
                                "Items": [
                                    "TLSv1",
                                    "TLSv1.1",
                                    "TLSv1.2"
                                ],
                                "Quantity": 3
                            },
                            "OriginProtocolPolicy": "match-viewer",
                            "OriginReadTimeout": 30,
                            "HTTPPort": 80,
                            "HTTPSPort": 443,
                            "OriginKeepaliveTimeout": 5
                        },
                        "CustomHeaders": {
                            "Quantity": 0
                        },
                        "Id": "GitHub VPSDemo",
                        "DomainName": "teedty1.github.io"
                    },
                    {
                        "OriginPath": "",
                        "CustomOriginConfig": {
                            "OriginSslProtocols": {
                                "Items": [
                                    "TLSv1",
                                    "TLSv1.1",
                                    "TLSv1.2"
                                ],
                                "Quantity": 3
                            },
                            "OriginProtocolPolicy": "match-viewer",
                            "OriginReadTimeout": 30,
                            "HTTPPort": 80,
                            "HTTPSPort": 443,
                            "OriginKeepaliveTimeout": 5
                        },
                        "CustomHeaders": {
                            "Quantity": 0
                        },
                        "Id": "VPS devel",
                        "DomainName": "devel.vpsenv.com"
                    }
                ],
                "Quantity": 2
            },
            "DefaultRootObject": "/VPSDemo/index.html",
            "PriceClass": "PriceClass_All",
            "Enabled": true,
            "DefaultCacheBehavior": {
                "TrustedSigners": {
                    "Enabled": false,
                    "Quantity": 0
                },
                "LambdaFunctionAssociations": {
                    "Quantity": 0
                },
                "TargetOriginId": "GitHub VPSDemo",
                "ViewerProtocolPolicy": "allow-all",
                "ForwardedValues": {
                    "Headers": {
                        "Items": [
                            "*"
                        ],
                        "Quantity": 1
                    },
                    "Cookies": {
                        "Forward": "all"
                    },
                    "QueryStringCacheKeys": {
                        "Quantity": 0
                    },
                    "QueryString": true
                },
                "MaxTTL": 31536000,
                "SmoothStreaming": false,
                "DefaultTTL": 86400,
                "AllowedMethods": {
                    "Items": [
                        "HEAD",
                        "GET"
                    ],
                    "CachedMethods": {
                        "Items": [
                            "HEAD",
                            "GET"
                        ],
                        "Quantity": 2
                    },
                    "Quantity": 2
                },
                "MinTTL": 0,
                "Compress": false
            },
            "CallerReference": "1552983402732",
            "ViewerCertificate": {
                "CloudFrontDefaultCertificate": true,
                "MinimumProtocolVersion": "TLSv1",
                "CertificateSource": "cloudfront"
            },
            "CustomErrorResponses": {
                "Quantity": 0
            },
            "HttpVersion": "http2",
            "Restrictions": {
                "GeoRestriction": {
                    "RestrictionType": "none",
                    "Quantity": 0
                }
            },
            "Aliases": {
                "Quantity": 0
            }
        },
        "ActiveTrustedSigners": {
            "Enabled": false,
            "Quantity": 0
        },
        "LastModifiedTime": "2019-03-19T09:10:35.949Z",
        "Id": "E2BZSBSX84TBUL",
        "ARN": "arn:aws:cloudfront::066432702053:distribution/E2BZSBSX84TBUL"
    },
    "ETag": "E2HDQL9U2NC0TH"
}
```