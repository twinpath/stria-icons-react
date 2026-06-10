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
var CircleUser_exports = {};
__export(CircleUser_exports, {
  default: () => CircleUser_default
});
module.exports = __toCommonJS(CircleUser_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CircleUserDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM256 128C295.766 128 328 160.236 328 200S295.766 272 256 272C216.238 272 184 239.764 184 200S216.238 128 256 128ZM256 432C202.807 432 155.154 408.184 122.855 370.766C141.658 340.402 174.998 320 213.334 320H298.666C337.006 320 370.344 340.4 389.145 370.764C356.844 408.184 309.193 432 256 432Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256.145 272C295.91 272 328.145 239.764 328.145 200S295.91 128 256.145 128C216.383 128 184.145 160.236 184.145 200S216.383 272 256.145 272ZM298.811 320H213.479C175.143 320 141.803 340.402 123 370.766C155.299 408.184 202.951 432 256.145 432S356.988 408.184 389.289 370.764C370.488 340.4 337.15 320 298.811 320Z" })
    ]
  }
));
CircleUserDuotone.displayName = "CircleUserDuotone";
var CircleUser_default = CircleUserDuotone;
