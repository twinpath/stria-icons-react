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
var CruzeiroSign_exports = {};
__export(CruzeiroSign_exports, {
  default: () => CruzeiroSign_default
});
module.exports = __toCommonJS(CruzeiroSign_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CruzeiroSignSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 384 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M375.125 373.562C389 390.766 386.312 415.938 369.094 429.812C327.219 463.578 276.719 480.25 226.375 480.25C168.344 480.25 110.562 458.125 66.469 414.578C23.594 372.234 0 315.922 0 256S23.594 139.766 66.438 97.438C148.844 16.047 278.969 9.516 369.094 82.188C386.312 96.063 389 121.234 375.125 138.438C361.313 155.609 336.063 158.359 318.906 144.469C260.469 97.375 176.156 101.547 122.656 154.359C95.156 181.531 80 217.625 80 256S95.156 330.469 122.688 357.656C133.875 368.701 146.623 377.111 160 383.875V256C160 238.328 174.312 224 192 224C200.963 224 209.012 227.719 214.818 233.646C227.348 227.643 241.203 224 256 224C272.906 224 289.531 228.453 304.062 236.875C319.344 245.734 324.562 265.328 315.687 280.609C306.812 295.875 287.25 301.063 271.937 292.25C267.156 289.469 261.656 288 256 288C238.344 288 224 302.359 224 320V399.832C257.42 400.359 291.098 389.934 318.906 367.531C336.062 353.688 361.312 356.391 375.125 373.562Z" })
  }
));
CruzeiroSignSolid.displayName = "CruzeiroSignSolid";
var CruzeiroSign_default = CruzeiroSignSolid;
