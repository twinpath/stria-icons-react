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
var UserNinja_exports = {};
__export(UserNinja_exports, {
  default: () => UserNinja_default
});
module.exports = __toCommonJS(UserNinja_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const UserNinjaDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M176 96.001H272C289.75 96.001 304 110.251 304 128.001H144C144 110.251 158.25 96.001 176 96.001Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M32 192.001C59.25 192.001 83.75 180.501 101.25 162.251C116.25 216.251 165.25 256.001 224 256.001C294.75 256.001 352 198.751 352 128.001S294.75 0.001 224 0.001C173.625 0.001 130.375 29.376 109.5 71.751C92.125 47.751 64 32.001 32 32.001C32 65.376 49.125 94.751 75.125 112.001C49.125 129.251 32 158.626 32 192.001ZM176 96.001H272C289.75 96.001 304 110.251 304 128.001H144C144 110.251 158.25 96.001 176 96.001ZM305.795 306.942L224 416.001L142.205 306.942C61.357 321.626 0 392.247 0 477.333C0 496.477 15.523 512.001 34.664 512.001H413.336C432.477 512.001 448 496.477 448 477.333C448 392.247 386.648 321.626 305.795 306.942Z" })
    ]
  }
));
UserNinjaDuotone.displayName = "UserNinjaDuotone";
var UserNinja_default = UserNinjaDuotone;
