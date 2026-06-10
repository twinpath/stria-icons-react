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
var Ruler_exports = {};
__export(Ruler_exports, {
  default: () => Ruler_default
});
module.exports = __toCommonJS(Ruler_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const RulerDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M512 145.098C512 153.301 508.889 161.503 502.666 167.725L167.727 502.666C161.504 508.889 153.301 512 145.099 512S128.693 508.889 122.471 502.666L9.334 389.529C3.111 383.307 0 375.104 0 366.902S3.111 350.497 9.334 344.275L63.668 289.941L120.236 346.51C123.347 349.62 127.448 351.176 131.55 351.176C140.61 351.176 147.53 343.861 147.53 335.196C147.53 331.094 145.975 326.993 142.863 323.883L86.295 267.314L131.549 222.059L188.119 278.627C191.229 281.738 195.331 283.294 199.432 283.294C208.119 283.294 215.412 276.344 215.412 267.314C215.412 263.213 213.857 259.112 210.746 256L154.178 199.432L199.432 154.176L256 210.746C259.112 213.857 263.213 215.412 267.314 215.412C276.374 215.412 283.295 208.094 283.295 199.432C283.295 195.33 281.739 191.229 278.627 188.117L222.059 131.549L267.314 86.295L323.883 142.863C326.993 145.974 331.095 147.53 335.197 147.53C344.257 147.53 351.177 140.215 351.177 131.549C351.177 127.448 349.621 123.347 346.51 120.236L289.941 63.666L344.275 9.334C350.498 3.111 358.701 0 366.903 0S383.308 3.111 389.529 9.334L502.666 122.471C508.889 128.693 512 136.896 512 145.098Z ", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M86.627 267.314L64 289.941L120.568 346.51C123.679 349.62 127.78 351.176 131.882 351.176C140.942 351.176 147.862 343.861 147.862 335.196C147.862 331.094 146.307 326.993 143.195 323.883L86.627 267.314ZM154.51 199.432L131.881 222.059L188.451 278.627C191.562 281.738 195.663 283.294 199.764 283.294C208.451 283.294 215.744 276.344 215.744 267.314C215.744 263.213 214.189 259.112 211.078 256L154.51 199.432ZM351.509 131.549C351.509 127.448 349.953 123.347 346.842 120.236L290.273 63.666L267.646 86.295L324.215 142.863C327.325 145.974 331.427 147.53 335.529 147.53C344.589 147.53 351.509 140.215 351.509 131.549ZM222.391 131.549L199.764 154.176L256.332 210.746C259.444 213.857 263.545 215.412 267.646 215.412C276.706 215.412 283.627 208.094 283.627 199.432C283.627 195.33 282.071 191.229 278.959 188.117L222.391 131.549Z " })
    ]
  }
));
RulerDuotone.displayName = "RulerDuotone";
var Ruler_default = RulerDuotone;
