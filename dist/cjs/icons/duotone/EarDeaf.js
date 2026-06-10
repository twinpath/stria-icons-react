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
var EarDeaf_exports = {};
__export(EarDeaf_exports, {
  default: () => EarDeaf_default
});
module.exports = __toCommonJS(EarDeaf_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const EarDeafDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M192.002 319.996C185.755 313.748 177.566 310.624 169.378 310.624S153.001 313.748 146.754 319.996L9.371 457.377C3.124 463.625 0 471.813 0 480.001C0 498.305 14.965 512 31.998 512C40.186 512 48.374 508.876 54.621 502.629L192.004 365.246C198.251 358.999 201.375 350.811 201.375 342.622S198.251 326.244 192.004 319.996H192.002ZM512 31.996C512 23.808 508.876 15.619 502.629 9.371H502.627C496.38 3.123 488.191 -0.001 480.003 -0.001S463.626 3.123 457.379 9.371L416 50.75C409.752 56.998 406.628 65.186 406.628 73.375C406.628 81.563 409.751 89.75 415.998 95.998H416C422.247 102.246 430.436 105.37 438.624 105.37S455.002 102.246 461.25 95.998L502.629 54.621C508.876 48.373 512 40.185 512 31.996Z ", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M200.176 240C200.176 217.938 218.113 200 240.176 200S280.176 217.938 280.176 240C280.176 253.25 290.926 264 304.176 264S328.176 253.25 328.176 240C328.176 191.469 288.707 152 240.176 152S152.176 191.469 152.176 240C152.176 253.25 162.926 264 176.176 264S200.176 253.25 200.176 240ZM416.15 241.618C416.15 183.834 373.244 63.995 240.177 63.995C86.613 63.995 65 214.791 65 224.419C65 241.743 79.99 255.996 97.748 255.996C114.353 255.996 126.994 242.93 128.992 226.443C135.703 171.058 183.012 127.995 240.177 127.995C320.63 127.995 351.36 203.558 351.36 247.64C351.36 305.584 313.139 345.778 304.988 353.934L288.176 370.746V383.996C288.176 415.396 265.461 441.578 235.593 446.975C220.619 449.682 208.176 463.348 208.176 478.566C208.176 496.519 222.9 510.66 240.201 510.66C245.006 510.66 340.656 496.323 351.41 397.996C412.774 335.759 416.15 263.382 416.15 241.618Z " })
    ]
  }
));
EarDeafDuotone.displayName = "EarDeafDuotone";
var EarDeaf_default = EarDeafDuotone;
