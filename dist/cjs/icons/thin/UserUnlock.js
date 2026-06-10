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
var UserUnlock_exports = {};
__export(UserUnlock_exports, {
  default: () => UserUnlock_default
});
module.exports = __toCommonJS(UserUnlock_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const UserUnlockThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M224 256C294.695 256 352 198.691 352 128S294.695 0 224 0C153.312 0 96 57.309 96 128S153.312 256 224 256ZM224 16C285.758 16 336 66.242 336 128S285.758 240 224 240S112 189.758 112 128S162.242 16 224 16ZM320 496H41.438C27.406 496 16 485.219 16 472C16 388.188 87.406 320 175.156 320H272.844C288.188 320 303.344 322.062 317.812 326.156C322.188 327.406 326.5 324.875 327.688 320.656C328.906 316.406 326.438 311.969 322.188 310.781C306.281 306.281 289.656 304 272.844 304H175.156C78.562 304 0 379.375 0 472C0 494.062 18.594 512 41.438 512H320C324.406 512 328 508.406 328 504S324.406 496 320 496ZM576 288H448V208C448 181.531 469.531 160 496 160S544 181.531 544 208V216C544 220.406 547.594 224 552 224S560 220.406 560 216V208C560 172.719 531.281 144 496 144S432 172.719 432 208V288H416C380.654 288 352 316.652 352 352V448C352 483.346 380.654 512 416 512H576C611.346 512 640 483.346 640 448V352C640 316.652 611.346 288 576 288ZM624 448C624 474.467 602.467 496 576 496H416C389.533 496 368 474.467 368 448V352C368 325.533 389.533 304 416 304H576C602.467 304 624 325.533 624 352V448ZM496 384C487.164 384 480 391.162 480 400C480 408.836 487.164 416 496 416S512 408.836 512 400C512 391.162 504.836 384 496 384Z" })
  }
));
UserUnlockThin.displayName = "UserUnlockThin";
var UserUnlock_default = UserUnlockThin;
