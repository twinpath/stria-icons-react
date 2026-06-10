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
var Hashtag_exports = {};
__export(Hashtag_exports, {
  default: () => Hashtag_default
});
module.exports = __toCommonJS(Hashtag_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HashtagDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M234.619 433.035C230.297 457.535 249.143 480 274.022 480H274.024C293.438 480 310.051 466.062 313.426 446.943L323.121 392H241.862L234.619 433.035ZM338.963 32H338.959C319.545 32 302.932 45.938 299.557 65.057L255.979 312H337.241L378.366 78.963C382.688 54.463 363.842 32 338.963 32ZM74.619 433.035C70.297 457.535 89.143 480 114.022 480H114.024C133.438 480 150.051 466.062 153.426 446.943L197.006 200H115.743L74.619 433.035ZM178.963 32H178.959C159.545 32 142.932 45.938 139.557 65.057L129.862 120H211.123L218.366 78.963C222.688 54.463 203.842 32 178.963 32Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M408 120H371.455L357.338 200H408C430.092 200 448 182.092 448 160S430.092 120 408 120ZM0 352C0 374.092 17.908 392 40 392H82.193L96.311 312H40C17.908 312 0 329.908 0 352ZM72 200H276.074L290.193 120H72C49.908 120 32 137.908 32 160S49.908 200 72 200ZM376 312H177.572L163.453 392H376C398.092 392 416 374.092 416 352S398.092 312 376 312Z" })
    ]
  }
));
HashtagDuotone.displayName = "HashtagDuotone";
var Hashtag_default = HashtagDuotone;
