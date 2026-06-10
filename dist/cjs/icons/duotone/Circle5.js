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
var Circle5_exports = {};
__export(Circle5_exports, {
  default: () => Circle5_default
});
module.exports = __toCommonJS(Circle5_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const Circle5Duotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM272.953 384H223.359C195.125 384 170.156 366 161.234 339.219C157.047 326.625 163.844 313.031 176.422 308.844C188.953 304.781 202.578 311.469 206.766 324.031C209.156 331.188 215.812 336 223.359 336H272.953C290.078 336 304 322.062 304 304.938C304 289.188 292.219 275.938 276.594 274.125L189.203 263.844C182.578 263.062 176.594 259.562 172.641 254.188C168.703 248.812 167.172 242.062 168.422 235.531L185.156 147.531C187.312 136.188 197.203 128 208.734 128H312C325.25 128 336 138.75 336 152S325.25 176 312 176H228.594L220.391 219.188L282.187 226.438C321.984 231.125 352 264.844 352 304.938C352 348.531 316.547 384 272.953 384Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M352.002 304.938C352.002 348.531 316.548 384 272.955 384H223.361C195.127 384 170.158 366 161.236 339.219C157.048 326.625 163.845 313.031 176.424 308.844C188.955 304.781 202.58 311.469 206.767 324.031C209.158 331.188 215.814 336 223.361 336H272.955C290.08 336 304.002 322.062 304.002 304.938C304.002 289.188 292.22 275.938 276.595 274.125L189.205 263.844C182.58 263.062 176.595 259.562 172.642 254.188C168.705 248.812 167.173 242.062 168.423 235.531L185.158 147.531C187.314 136.188 197.205 128 208.736 128H312.002C325.252 128 336.002 138.75 336.002 152S325.252 176 312.002 176H228.595L220.392 219.188L282.189 226.438C321.986 231.125 352.002 264.844 352.002 304.938Z" })
    ]
  }
));
Circle5Duotone.displayName = "Circle5Duotone";
var Circle5_default = Circle5Duotone;
