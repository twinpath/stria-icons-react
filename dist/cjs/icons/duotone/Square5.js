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
var Square5_exports = {};
__export(Square5_exports, {
  default: () => Square5_default
});
module.exports = __toCommonJS(Square5_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const Square5Duotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 32H64C28.654 32 0 60.654 0 96V416C0 451.346 28.654 480 64 480H384C419.346 480 448 451.346 448 416V96C448 60.654 419.346 32 384 32ZM240.953 384H191.359C163.125 384 138.156 366 129.234 339.219C125.047 326.625 131.844 313.031 144.422 308.844C156.953 304.781 170.578 311.469 174.766 324.031C177.156 331.188 183.812 336 191.359 336H240.953C258.078 336 272 322.062 272 304.938C272 289.188 260.219 275.938 244.594 274.125L157.203 263.844C150.578 263.062 144.594 259.562 140.641 254.188C136.703 248.812 135.172 242.062 136.422 235.531L153.156 147.531C155.312 136.188 165.203 128 176.734 128H280C293.25 128 304 138.75 304 152S293.25 176 280 176H196.594L188.391 219.188L250.187 226.438C289.984 231.125 320 264.844 320 304.938C320 348.531 284.547 384 240.953 384Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M320.002 304.938C320.002 348.531 284.548 384 240.955 384H191.361C163.127 384 138.158 366 129.236 339.219C125.048 326.625 131.845 313.031 144.424 308.844C156.955 304.781 170.58 311.469 174.767 324.031C177.158 331.188 183.814 336 191.361 336H240.955C258.08 336 272.002 322.062 272.002 304.938C272.002 289.188 260.22 275.938 244.595 274.125L157.205 263.844C150.58 263.062 144.595 259.562 140.642 254.188C136.705 248.812 135.173 242.062 136.423 235.531L153.158 147.531C155.314 136.188 165.205 128 176.736 128H280.002C293.252 128 304.002 138.75 304.002 152S293.252 176 280.002 176H196.595L188.392 219.188L250.189 226.438C289.986 231.125 320.002 264.844 320.002 304.938Z" })
    ]
  }
));
Square5Duotone.displayName = "Square5Duotone";
var Square5_default = Square5Duotone;
