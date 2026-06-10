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
var Handshake_exports = {};
__export(Handshake_exports, {
  default: () => Handshake_default
});
module.exports = __toCommonJS(Handshake_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HandshakeDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M480 128.224C439.021 87.294 415.443 64.297 357.49 64.297C346.996 64.297 337.512 63.485 327.25 72.665L217 163.563C196.75 180.675 194.234 210.964 211.359 231.167C220.859 242.377 234.391 248.154 248.031 248.154C258.969 248.154 269.984 244.438 279 236.819L312.59 208.419H312.592L318.574 203.361L483.875 338.748C488.236 342.284 490.967 346.867 492.922 351.73H544V128.458L480 128.224ZM0 383.932H64C81.75 383.932 96 369.693 96 351.964V128.458H0V383.932ZM48 320.126C56.75 320.126 64 327.241 64 336.109C64 344.845 56.75 352.089 48 352.089S32 344.845 32 336.109C32 327.241 39.25 320.126 48 320.126Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M318.574 203.361L279 236.819C269.984 244.438 258.969 248.154 248.031 248.154C234.391 248.154 220.859 242.377 211.359 231.167C194.234 210.964 196.75 180.675 217 163.563L327.25 72.665L280.945 64C223.633 64.375 168.752 87.611 128.15 128.075L128 128.224L96 128.458V351.855H146.25L236.75 433.643C264.25 455.993 304.5 451.746 326.75 424.4L327 424.151L344.875 439.639C360.75 452.621 384.25 450.123 397.25 434.268L428.625 395.681L433.999 400.177C447.75 411.168 467.875 409.17 479 395.431L488.576 383.604C499.656 369.911 497.555 349.849 483.875 338.748L318.574 203.361ZM544 128.458V352.089C544 369.693 558.25 384.057 576 384.057H640V128.458H544ZM592 352.089C583.25 352.089 576 344.845 576 336.109C576 327.241 583.25 320.126 592 320.126S608 327.241 608 336.109C608 344.845 600.75 352.089 592 352.089Z" })
    ]
  }
));
HandshakeDuotone.displayName = "HandshakeDuotone";
var Handshake_default = HandshakeDuotone;
