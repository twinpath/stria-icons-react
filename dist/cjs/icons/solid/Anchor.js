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
var Anchor_exports = {};
__export(Anchor_exports, {
  default: () => Anchor_default
});
module.exports = __toCommonJS(Anchor_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const AnchorSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M571.313 324.688L507.314 260.688C501.064 254.438 490.939 254.438 484.689 260.688L420.69 324.688C410.655 334.756 417.76 352 432.002 352H459.457C445.145 407.049 395.468 448 336.004 448H320.004V240H368.003C376.841 240 384.003 232.836 384.003 224V192C384.003 183.164 376.841 176 368.003 176H340.951C366.872 158.809 384.003 129.434 384.003 96C384.003 42.98 341.023 0 288.004 0S192.006 42.98 192.006 96C192.006 129.434 209.137 158.809 235.058 176H208.006C199.17 176 192.006 183.164 192.006 192V224C192.006 232.836 199.17 240 208.006 240H256.005V448H240.005C180.541 448 130.864 407.049 116.552 352H144.007C158.266 352 165.34 334.744 155.319 324.688L91.32 260.688C85.07 254.438 74.945 254.438 68.695 260.688L4.696 324.688C-5.339 334.756 1.767 352 16.009 352H50.899C66.205 442.66 145.055 512 240.005 512H336.004C430.953 512 509.804 442.66 525.11 352H560C574.26 352 581.334 334.744 571.313 324.688ZM288.004 64C305.649 64 320.004 78.355 320.004 96S305.649 128 288.004 128S256.005 113.645 256.005 96S270.36 64 288.004 64Z" })
  }
));
AnchorSolid.displayName = "AnchorSolid";
var Anchor_default = AnchorSolid;
