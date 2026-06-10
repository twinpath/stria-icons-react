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
var CommentMedical_exports = {};
__export(CommentMedical_exports, {
  default: () => CommentMedical_default
});
module.exports = __toCommonJS(CommentMedical_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CommentMedicalLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 512 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256.033 32C114.678 32 0.068 125.125 0.068 240C0.068 287.625 19.941 331.25 52.935 366.25C38.062 405.75 7.066 439.125 6.566 439.5C-0.057 446.5 -1.807 456.75 1.943 465.5C5.816 474.25 14.316 480 23.939 480C85.431 480 133.926 454.25 163.047 433.75C192.043 442.75 223.289 448 256.033 448C397.39 448 512 354.875 512 240S397.39 32 256.033 32ZM256.033 416C227.787 416 199.791 411.75 172.795 403.25C163.279 400.182 152.873 401.789 144.726 407.588L144.674 407.625C121.678 423.875 86.181 442.875 42.062 447.25C54.06 432.125 71.808 406.75 82.806 377.625L82.935 377.285C87.219 366.014 84.726 353.287 76.506 344.463L76.308 344.25C47.312 313.75 32.064 277.625 32.064 240C32.064 143 132.551 64 256.033 64C379.517 64 480.004 143 480.004 240S379.517 416 256.033 416ZM336 208H288V160C288 151.162 280.836 144 272 144H240C231.164 144 224 151.162 224 160V208H176C167.164 208 160 215.162 160 224V256C160 264.836 167.164 272 176 272H224V320C224 328.836 231.164 336 240 336H272C280.836 336 288 328.836 288 320V272H336C344.836 272 352 264.836 352 256V224C352 215.162 344.836 208 336 208Z" })
  }
));
CommentMedicalLight.displayName = "CommentMedicalLight";
var CommentMedical_default = CommentMedicalLight;
