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
var UserClock_exports = {};
__export(UserClock_exports, {
  default: () => UserClock_default
});
module.exports = __toCommonJS(UserClock_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const UserClockLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M544 352H512V304C512 295.162 504.836 288 496 288S480 295.162 480 304V374.25C480 379.635 484.365 384 489.75 384H544C552.836 384 560 376.836 560 368C560 359.162 552.836 352 544 352ZM496 224C416.375 224 352 288.375 352 368S416.375 512 496 512S640 447.625 640 368S575.625 224 496 224ZM496 480C434.25 480 384 429.75 384 368S434.25 256 496 256S608 306.25 608 368S557.75 480 496 480ZM336.022 480H34.664C33.213 480 32 478.793 32 477.342C31.994 399.404 95.399 336 173.336 336H274.664C285.219 336 295.412 337.375 305.242 339.734C314.02 341.842 322.736 336.617 324.766 327.82C324.791 327.715 324.815 327.609 324.84 327.502C326.867 318.785 321.318 310.229 312.59 308.254C300.387 305.49 287.705 304 274.664 304H173.336C77.539 304 -0.113 381.715 0 477.543C0.024 496.574 15.633 512 34.664 512H336.022C344.846 512 352 504.846 352 496.021V495.977C352 487.152 344.846 480 336.022 480ZM224 256C294.695 256 352 198.691 352 128S294.695 0 224 0C153.313 0 96 57.309 96 128S153.313 256 224 256ZM224 32C276.936 32 320 75.064 320 128C320 180.934 276.936 224 224 224S128 180.934 128 128C128 75.064 171.065 32 224 32Z" })
  }
));
UserClockLight.displayName = "UserClockLight";
var UserClock_default = UserClockLight;
