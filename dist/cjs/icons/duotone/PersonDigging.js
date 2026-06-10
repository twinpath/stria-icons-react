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
var PersonDigging_exports = {};
__export(PersonDigging_exports, {
  default: () => PersonDigging_default
});
module.exports = __toCommonJS(PersonDigging_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PersonDiggingDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M310.975 416.021C297.1 416.021 284.975 424.895 280.6 437.893L255.85 512H575.85L473.975 305.674C462.6 283.178 430.85 281.928 417.849 303.549L385.996 357.832L385.975 357.791L199.168 256.152L105.635 205.262L82.051 192.43L67.521 209.1C57.639 220.438 41.209 223.391 28 216.203L361.725 399.156L361.742 399.162L351.85 416.021H310.975ZM271.85 95.977C298.35 95.977 319.85 74.482 319.85 47.988S298.35 0 271.85 0S223.85 21.494 223.85 47.988S245.35 95.977 271.85 95.977Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M320.874 322.174L296.874 200.953C288.999 161.336 263.249 127.719 227.124 109.725C226.124 109.225 224.999 109.1 223.999 108.6C221.749 107.475 219.245 106.6 216.745 105.975C201.495 99.852 185.245 95.977 168.745 95.977H95.995C86.71 95.977 77.876 99.984 71.761 106.973L19.335 166.895C5.804 182.359 10.097 206.383 28.15 216.203C41.359 223.391 57.788 220.438 67.671 209.1L110.495 159.963H144.87L105.784 205.262L199.318 256.152L234.374 214.824L247.874 282.434L247.364 282.293L320.874 322.174ZM209.745 357.291C183.995 340.045 157.495 324.049 130.245 309.178L58.62 270.186L1.245 471.139C-3.63 488.135 6.245 505.881 23.245 510.754C40.245 515.629 57.87 505.756 62.745 488.76L99.37 360.664L159.995 401.031V479.887C159.995 497.508 174.37 511.879 191.995 511.879S223.999 497.508 223.999 479.887V383.91C223.999 373.162 218.62 363.164 209.745 357.291Z" })
    ]
  }
));
PersonDiggingDuotone.displayName = "PersonDiggingDuotone";
var PersonDigging_default = PersonDiggingDuotone;
