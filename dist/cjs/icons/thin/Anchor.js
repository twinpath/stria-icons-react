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
const AnchorThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M573.958 338.641L501.958 258.641C498.896 255.297 493.115 255.297 490.052 258.641L418.052 338.641C415.099 341.937 415.365 346.984 418.646 349.953C421.958 352.922 426.974 352.656 429.958 349.359L488.005 284.844V296C488.005 403.58 402.564 491.35 296.005 495.594V216H376.005C380.427 216 384.005 212.422 384.005 208S380.427 200 376.005 200H296.005V159.193C336.374 155.127 368.005 121.441 368.005 80C368.005 35.816 332.189 0 288.005 0S208.005 35.816 208.005 80C208.005 121.441 239.636 155.127 280.005 159.193V200H200.005C195.583 200 192.005 203.578 192.005 208S195.583 216 200.005 216H280.005V495.594C173.447 491.35 88.005 403.58 88.005 296V284.844L146.052 349.359C147.646 351.109 149.818 352 152.005 352C153.911 352 155.833 351.328 157.365 349.953C160.646 346.984 160.911 341.938 157.958 338.641L85.958 258.641C82.896 255.297 77.115 255.297 74.052 258.641L2.052 338.641C-0.901 341.938 -0.635 346.984 2.646 349.953C5.943 352.922 10.99 352.656 13.958 349.359L72.005 284.844V296C72.005 412.408 164.619 507.34 280.005 511.596V512H296.005V511.596C411.392 507.34 504.005 412.408 504.005 296V284.844L562.052 349.359C563.646 351.109 565.818 352 568.005 352C569.911 352 571.833 351.328 573.365 349.953C576.646 346.984 576.911 341.938 573.958 338.641ZM224.005 80C224.005 44.709 252.716 16 288.005 16S352.005 44.709 352.005 80C352.005 115.289 323.294 144 288.005 144S224.005 115.289 224.005 80Z" })
  }
));
AnchorThin.displayName = "AnchorThin";
var Anchor_default = AnchorThin;
