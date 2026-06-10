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
var CommentArrowUpRight_exports = {};
__export(CommentArrowUpRight_exports, {
  default: () => CommentArrowUpRight_default
});
module.exports = __toCommonJS(CommentArrowUpRight_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CommentArrowUpRightLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256.033 32C114.678 32 0.068 125.125 0.068 240C0.068 287.625 19.941 331.25 52.935 366.25C38.062 405.75 7.066 439.125 6.566 439.5C-0.057 446.5 -1.807 456.75 1.943 465.5C5.816 474.25 14.316 480 23.939 480C85.431 480 133.926 454.25 163.047 433.75C192.043 442.75 223.289 448 256.033 448C397.39 448 512 354.875 512 240S397.39 32 256.033 32ZM256.033 416C227.787 416 199.791 411.75 172.795 403.25C163.279 400.182 152.873 401.791 144.726 407.588L144.674 407.625C121.678 423.875 86.181 442.875 42.062 447.25C54.06 432.125 71.808 406.75 82.806 377.625L82.935 377.287C87.219 366.014 84.726 353.287 76.506 344.463L76.308 344.25C47.312 313.75 32.064 277.625 32.064 240C32.064 143 132.551 64 256.033 64C379.517 64 480.004 143 480.004 240S379.517 416 256.033 416ZM326.109 145.23C324.154 144.422 322.082 144 320 144H192C183.156 144 176 151.156 176 160S183.156 176 192 176H281.375L164.687 292.688C158.437 298.938 158.437 309.063 164.687 315.312C167.812 318.438 171.906 320 176 320S184.187 318.438 187.312 315.312L304 198.625V288C304 296.844 311.156 304 320 304S336 296.844 336 288V160C336 157.918 335.578 155.846 334.769 153.891C333.148 149.973 330.027 146.852 326.109 145.23Z" })
  }
));
CommentArrowUpRightLight.displayName = "CommentArrowUpRightLight";
var CommentArrowUpRight_default = CommentArrowUpRightLight;
