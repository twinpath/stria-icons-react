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
var Square3_exports = {};
__export(Square3_exports, {
  default: () => Square3_default
});
module.exports = __toCommonJS(Square3_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const Square3Duotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 32H64C28.654 32 0 60.654 0 96V416C0 451.346 28.654 480 64 480H384C419.346 480 448 451.346 448 416V96C448 60.654 419.346 32 384 32ZM236 384H191.359C163.125 384 138.156 366 129.234 339.219C125.047 326.625 131.844 313.031 144.422 308.844C157 304.781 170.594 311.469 174.766 324.031C177.156 331.188 183.812 336 191.359 336H236C255.844 336 272 319.844 272 300S255.844 264 236 264H184C174.109 264 165.219 257.938 161.625 248.688C158.047 239.469 160.484 229 167.781 222.312L218.297 176H152C138.75 176 128 165.25 128 152S138.75 128 152 128H280C289.891 128 298.781 134.062 302.375 143.312C305.953 152.531 303.516 163 296.219 169.688L245.156 216.5C287.188 221.062 320 256.781 320 300C320 346.312 282.312 384 236 384Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M320.002 300C320.002 346.312 282.314 384 236.002 384H191.361C163.127 384 138.158 366 129.236 339.219C125.048 326.625 131.845 313.031 144.424 308.844C157.002 304.781 170.595 311.469 174.767 324.031C177.158 331.188 183.814 336 191.361 336H236.002C255.845 336 272.002 319.844 272.002 300S255.845 264 236.002 264H184.002C174.111 264 165.22 257.938 161.627 248.688C158.048 239.469 160.486 229 167.783 222.312L218.298 176H152.002C138.752 176 128.002 165.25 128.002 152S138.752 128 152.002 128H280.002C289.892 128 298.783 134.062 302.377 143.312C305.955 152.531 303.517 163 296.22 169.688L245.158 216.5C287.189 221.062 320.002 256.781 320.002 300Z" })
    ]
  }
));
Square3Duotone.displayName = "Square3Duotone";
var Square3_default = Square3Duotone;
