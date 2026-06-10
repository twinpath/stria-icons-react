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
var Inboxes_exports = {};
__export(Inboxes_exports, {
  default: () => Inboxes_default
});
module.exports = __toCommonJS(Inboxes_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const InboxesSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M480 352H384L352 416H160L128 352H32C14.326 352 0 366.328 0 384V464C0 490.508 21.49 512 48 512H464C490.51 512 512 490.508 512 464V384C512 366.328 497.674 352 480 352ZM507.713 180.883L445.719 20.125C440.844 7.969 429.094 0 416 0H96C82.906 0 71.156 7.969 66.281 20.125L4.287 180.883C1.453 188.23 0 196.039 0 203.914V272C0 298.508 21.49 320 48 320H464C490.51 320 512 298.508 512 272V203.914C512 196.039 510.547 188.23 507.713 180.883ZM384 160L352 224H160L128 160H79.266L117.656 64H394.344L432.734 160H384Z" })
  }
));
InboxesSolid.displayName = "InboxesSolid";
var Inboxes_default = InboxesSolid;
