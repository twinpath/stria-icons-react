var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var CloudFog_exports = {};
__export(CloudFog_exports, {
  default: () => CloudFog_default
});
module.exports = __toCommonJS(CloudFog_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CloudFogThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M160 320H480C533 320 576 277 576 224S533 128 480 128C479.375 128 478.875 128.25 478.375 128.25C479.5 123 480 117.625 480 112C480 67.75 444.25 32 400 32C375.375 32 353.75 43.25 339 60.75C320.375 24.75 283.25 0 240 0C178.125 0 128 50.125 128 112C128 119.25 128.75 126.25 130.125 133.25C91.75 145.75 64 181.5 64 224C64 277 107 320 160 320ZM135.08 148.465L148.557 144.074L145.824 130.164C144.598 123.914 144 117.973 144 112C144 59.066 187.064 16 240 16C275.674 16 308.162 35.965 324.789 68.102L335.797 89.379L351.234 71.062C363.77 56.191 381.088 48 400 48C435.289 48 464 76.711 464 112C464 116.691 463.584 120.91 462.73 124.898L458.582 144.25H478.375C479.479 144.25 480.443 144.148 481.277 144.012C524.801 144.699 560 180.316 560 224C560 268.113 524.111 304 480 304H160C115.889 304 80 268.113 80 224C80 189.551 102.135 159.195 135.08 148.465ZM576 408C576 403.594 572.422 400 568 400H8C3.578 400 0 403.594 0 408S3.578 416 8 416H568C572.422 416 576 412.406 576 408ZM632 496H296C291.578 496 288 499.594 288 504S291.578 512 296 512H632C636.422 512 640 508.406 640 504S636.422 496 632 496ZM216 496H72C67.578 496 64 499.594 64 504S67.578 512 72 512H216C220.422 512 224 508.406 224 504S220.422 496 216 496Z" })
  }
));
CloudFogThin.displayName = "CloudFogThin";
var CloudFog_default = CloudFogThin;
