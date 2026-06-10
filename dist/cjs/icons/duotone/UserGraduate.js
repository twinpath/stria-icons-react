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
var UserGraduate_exports = {};
__export(UserGraduate_exports, {
  default: () => UserGraduate_default
});
module.exports = __toCommonJS(UserGraduate_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const UserGraduateDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 160C384 230.75 326.75 288 256 288S128 230.75 128 160H384Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M359.188 312.812L256 416L152.812 312.812C82.885 335.117 32 400.008 32 477.332C32 496.477 47.523 512 66.664 512H445.336C464.477 512 480 496.477 480 477.332C480 400.008 429.119 335.113 359.188 312.812ZM45.625 79.75L52 81.25V139.75C45 143.875 40 151.25 40 160C40 168.375 44.625 175.375 51.125 179.75L35.5 242C33.75 248.875 37.625 256 43.125 256H84.875C90.375 256 94.25 248.875 92.5 242L76.875 179.75C83.375 175.375 88 168.375 88 160C88 151.25 83 143.875 76 139.75V87.125L128 99.633V160H384V99.617L466.25 79.75C484.5 75.375 484.5 52.75 466.25 48.25L275.875 2.25C262.875 -0.75 249.25 -0.75 236.25 2.25L45.625 48.25C27.5 52.625 27.5 75.375 45.625 79.75Z" })
    ]
  }
));
UserGraduateDuotone.displayName = "UserGraduateDuotone";
var UserGraduate_default = UserGraduateDuotone;
